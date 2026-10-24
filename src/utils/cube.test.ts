/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  F2L_CASES,
  OLL_CASES,
  PLL_CASES,
  ALL_ALGORITHMS,
  getXpTier,
  searchAlgorithms
} from './algorithmsData';
import {
  getDefaultProgress,
  markCaseMastered,
  recordPracticeReview
} from './storage';

test('dataset contains exact required counts: 41 F2L, 57 OLL, 21 PLL (119 total)', () => {
  assert.equal(F2L_CASES.length, 41, 'Must contain exactly 41 standard F2L cases');
  assert.equal(OLL_CASES.length, 57, 'Must contain exactly 57 standard OLL cases');
  assert.equal(PLL_CASES.length, 21, 'Must contain exactly 21 standard PLL cases');
  assert.equal(ALL_ALGORITHMS.length, 119, 'Must contain exactly 119 total algorithms');
});

test('all 119 cases have unique IDs, verified status, and valid move notation', () => {
  const seenIds = new Set<string>();
  const moveRegex = /^[UDRLFBMESudrlfbxyz2'() /]+$/;

  for (const c of ALL_ALGORITHMS) {
    // Unique ID check
    assert.ok(!seenIds.has(c.id), `Duplicate ID found: ${c.id}`);
    seenIds.add(c.id);

    // Verified check
    assert.equal(c.verified, true, `Case ${c.id} should be verified`);

    // Non-empty fields
    assert.ok(c.name && c.name.trim().length > 0, `Case ${c.id} missing name`);
    assert.ok(c.subgroup && c.subgroup.trim().length > 0, `Case ${c.id} missing subgroup`);
    assert.ok(c.algorithm && c.algorithm.trim().length > 0, `Case ${c.id} missing algorithm`);

    // Standard notation check (moves only use valid Rubik's cube turn symbols)
    const validNotation = moveRegex.test(c.algorithm);
    assert.ok(validNotation, `Case ${c.id} has invalid move notation: "${c.algorithm}"`);

    // Check alternate algorithms if present
    if (c.alternates) {
      for (const alt of c.alternates) {
        assert.ok(moveRegex.test(alt), `Case ${c.id} alternate has invalid notation: "${alt}"`);
      }
    }
  }

  assert.equal(seenIds.size, 119, 'Must have 119 distinct IDs');
});

test('every case has a matching genuine diagram file in public/assets/cubes', () => {
  for (const c of ALL_ALGORITHMS) {
    assert.ok(c.imagePath, `Case ${c.id} is missing imagePath`);
    assert.ok(c.imagePath.startsWith('/assets/cubes/'), `Case ${c.id} imagePath must start with /assets/cubes/`);

    // Check disk existence
    const diskPath = path.join(process.cwd(), 'public', c.imagePath.replace(/^\//, ''));
    const exists = fs.existsSync(diskPath);
    assert.ok(exists, `Diagram file does not exist on disk: ${diskPath} for case ${c.id}`);

    const stat = fs.statSync(diskPath);
    assert.ok(stat.size > 200, `Diagram file too small or corrupted (${stat.size} bytes): ${diskPath}`);
  }
});

test('all 41 F2L cases have 27-character cube codes', () => {
  for (const f of F2L_CASES) {
    assert.ok(f.cubeCode, `F2L case ${f.id} missing cubeCode`);
    assert.equal(f.cubeCode.length, 27, `F2L case ${f.id} cubeCode must be exactly 27 characters, got ${f.cubeCode.length}`);
    assert.ok(/^[a-z]+$/.test(f.cubeCode), `F2L case ${f.id} cubeCode must be lowercase letters`);
  }
});

test('searchAlgorithms correctly matches case names, aliases, and notations', () => {
  const progress = getDefaultProgress();

  // Search Sune
  const suneMatches = searchAlgorithms(ALL_ALGORITHMS, 'sune', 'ALL', 'ALL', progress);
  assert.ok(suneMatches.length >= 1, 'Should find Sune cases');
  assert.ok(suneMatches.some((c) => c.name.includes('Sune') || c.alias?.includes('Sune')));

  // Search T Perm
  const tPermMatches = searchAlgorithms(ALL_ALGORITHMS, 'T Perm', 'ALL', 'ALL', progress);
  assert.ok(tPermMatches.length >= 1, 'Should find T Permutation');
  assert.equal(tPermMatches[0].caseNumber, 'T');

  // Filter category PLL only
  const pllOnly = searchAlgorithms(ALL_ALGORITHMS, '', 'PLL', 'ALL', progress);
  assert.equal(pllOnly.length, 21, 'PLL category filter returns all 21 PLL cases');

  // Filter category F2L only
  const f2lOnly = searchAlgorithms(ALL_ALGORITHMS, '', 'F2L', 'ALL', progress);
  assert.equal(f2lOnly.length, 41, 'F2L category filter returns all 41 F2L cases');
});

test('anti-farming XP logic prevents duplicate XP awards for the same case', () => {
  let progress = getDefaultProgress();
  assert.equal(progress.xp, 0);

  // First time mastering case 'f2l-01' -> awards 15 XP
  const res1 = markCaseMastered(progress, 'f2l-01', true);
  progress = res1.nextProgress;
  assert.equal(res1.xpGained, 15);
  assert.equal(progress.xp, 15);
  assert.equal(progress.mastered['f2l-01'], true);

  // Second time marking 'f2l-01' as mastered -> NO duplicate XP awarded!
  const res2 = markCaseMastered(progress, 'f2l-01', true);
  progress = res2.nextProgress;
  assert.equal(res2.xpGained, 0, 'Must NOT award XP if already mastered');
  assert.equal(progress.xp, 15, 'Total XP remains unchanged');
});

test('practice review session tracking prevents multi-click XP farming', () => {
  let progress = getDefaultProgress();
  const sessionReviewed = new Set<string>();

  // Review case 1
  const rev1 = recordPracticeReview(progress, 'oll-21', true, sessionReviewed);
  progress = rev1.nextProgress;
  sessionReviewed.add('oll-21');
  assert.equal(rev1.xpGained, 3, 'Awards 3 XP on first recall in session');

  // Try reviewing same case again in same session
  const rev2 = recordPracticeReview(progress, 'oll-21', true, sessionReviewed);
  assert.equal(rev2.xpGained, 0, 'No XP awarded for duplicate review in same session');
});

test('XP tier calculation correctly grades cuber levels', () => {
  assert.equal(getXpTier(0).level, 1);
  assert.equal(getXpTier(0).title, 'NOVICE CUBER');
  assert.equal(getXpTier(150).level, 2);
  assert.equal(getXpTier(650).level, 4);
  assert.equal(getXpTier(6000).level, 10);
  assert.equal(getXpTier(6000).title, 'SPEED DEMON');
});

