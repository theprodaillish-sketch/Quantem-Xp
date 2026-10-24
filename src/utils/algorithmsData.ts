/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlgorithmCase, UserProgress } from '../types/cube';

export const F2L_CASES: AlgorithmCase[] = [
  {
    "id": "f2l-01",
    "category": "F2L",
    "caseNumber": 1,
    "subgroup": "1. Basic cases",
    "name": "F2L Case 1",
    "alias": "1. Basic cases",
    "algorithm": "R U R'",
    "alternates": [],
    "imagePath": "/assets/cubes/xbxxyxxxrxxbxbxxbxwxxxrxxrx.webp",
    "cubeCode": "xbxxyxxxrxxbxbxxbxwxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-02",
    "category": "F2L",
    "caseNumber": 2,
    "subgroup": "1. Basic cases",
    "name": "F2L Case 2",
    "alias": "1. Basic cases",
    "algorithm": "F' U' F",
    "alternates": [
      "y' ( R' U' R )",
      "U' ( L' U L )"
    ],
    "imagePath": "/assets/cubes/xxxryxxxbxxwxbxxbxrxxxrxxrx.webp",
    "cubeCode": "xxxryxxxbxxwxbxxbxrxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-03",
    "category": "F2L",
    "caseNumber": 3,
    "subgroup": "1. Basic cases",
    "name": "F2L Case 3",
    "alias": "1. Basic cases",
    "algorithm": "U R U' R'",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxybxxbxxwxbxxbxrrxxrxxrx.webp",
    "cubeCode": "xxxxybxxbxxwxbxxbxrrxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-04",
    "category": "F2L",
    "caseNumber": 4,
    "subgroup": "1. Basic cases",
    "name": "F2L Case 4",
    "alias": "1. Basic cases",
    "algorithm": "U' F' U F",
    "alternates": [
      "y' ( U R' U' R )",
      "d ( R' U' R )"
    ],
    "imagePath": "/assets/cubes/xxxxyxxrrxbbxbxxbxwxxxrxxrx.webp",
    "cubeCode": "xxxxyxxrrxbbxbxxbxwxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-05",
    "category": "F2L",
    "caseNumber": 5,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 5",
    "alias": "2. Corner and edge in top",
    "algorithm": "(U' R U') (R' U R) U R'",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxybxxrxxbxbxxbxwrxxrxxrx.webp",
    "cubeCode": "xxxxybxxrxxbxbxxbxwrxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-06",
    "category": "F2L",
    "caseNumber": 6,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 6",
    "alias": "2. Corner and edge in top",
    "algorithm": "(U F' U) (F U' F') U' F",
    "alternates": [
      "y' ( U R' U ) ( R' U' R ) U' R'"
    ],
    "imagePath": "/assets/cubes/xxxxyxxrbxbwxbxxbxrxxxrxxrx.webp",
    "cubeCode": "xxxxyxxrbxbwxbxxbxrxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-07",
    "category": "F2L",
    "caseNumber": 7,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 7",
    "alias": "2. Corner and edge in top",
    "algorithm": "(U' R U) (R' U R) U R'",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxbyxxxrxxbxbxxbxwxxxrxxrx.webp",
    "cubeCode": "xxxbyxxxrxxbxbxxbxwxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-08",
    "category": "F2L",
    "caseNumber": 8,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 8",
    "alias": "2. Corner and edge in top",
    "algorithm": "(U F' U') (F U' F') U' F",
    "alternates": [
      "y' ( U R' U' ) ( R' U' R ) U' R'"
    ],
    "imagePath": "/assets/cubes/xrxxyxxxbxxwxbxxbxrxxxrxxrx.webp",
    "cubeCode": "xrxxyxxxbxxwxbxxbxrxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-09",
    "category": "F2L",
    "caseNumber": 9,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 9",
    "alias": "2. Corner and edge in top",
    "algorithm": "d (R' U2 R) d' (R U R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxbrxrbxbxxbxwxxxrxxrx.webp",
    "cubeCode": "xxxxyxxbrxrbxbxxbxwxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-10",
    "category": "F2L",
    "caseNumber": 10,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 10",
    "alias": "2. Corner and edge in top",
    "algorithm": "U' (R U2 R') d (R' U' R)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyrxxbxxwxbxxbxrbxxrxxrx.webp",
    "cubeCode": "xxxxyrxxbxxwxbxxbxrbxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-11",
    "category": "F2L",
    "caseNumber": 11,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 11",
    "alias": "2. Corner and edge in top",
    "algorithm": "(R U' R' U) d (R' U' R)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyrxxrxxbxbxxbxwbxxrxxrx.webp",
    "cubeCode": "xxxxyrxxrxxbxbxxbxwbxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-12",
    "category": "F2L",
    "caseNumber": 12,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 12",
    "alias": "2. Corner and edge in top",
    "algorithm": "(F' U F U') d' (F U F')",
    "alternates": [
      "y' ( R' U R U' ) d ( R U R' )"
    ],
    "imagePath": "/assets/cubes/xxxxyxxbbxrwxbxxbxrxxxrxxrx.webp",
    "cubeCode": "xxxxyxxbbxrwxbxxbxrxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-13",
    "category": "F2L",
    "caseNumber": 13,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 13",
    "alias": "2. Corner and edge in top",
    "algorithm": "(U F' U2 F) (U F' U2 F)",
    "alternates": [],
    "imagePath": "/assets/cubes/xrxxyxxxrxxbxbxxbxwxxxrxxrx.webp",
    "cubeCode": "xrxxyxxxrxxbxbxxbxwxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-14",
    "category": "F2L",
    "caseNumber": 14,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 14",
    "alias": "2. Corner and edge in top",
    "algorithm": "(U' R U2 R') (U' R U2 R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxbyxxxbxxwxbxxbxrxxxrxxrx.webp",
    "cubeCode": "xxxbyxxxbxxwxbxxbxrxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-15",
    "category": "F2L",
    "caseNumber": 15,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 15",
    "alias": "2. Corner and edge in top",
    "algorithm": "(U F' U' F) (U F' U2 F)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxryxxxrxxbxbxxbxwxxxrxxrx.webp",
    "cubeCode": "xxxryxxxrxxbxbxxbxwxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-16",
    "category": "F2L",
    "caseNumber": 16,
    "subgroup": "2. Corner and edge in top",
    "name": "F2L Case 16",
    "alias": "2. Corner and edge in top",
    "algorithm": "(U' R U R') (U' R U2 R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xbxxyxxxbxxwxbxxbxrxxxrxxrx.webp",
    "cubeCode": "xbxxyxxxbxxwxbxxbxrxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-17",
    "category": "F2L",
    "caseNumber": 17,
    "subgroup": "3. Corner pointing up, edge in top",
    "name": "F2L Case 17",
    "alias": "3. Corner pointing up, edge in top",
    "algorithm": "(R U2 R' U') (R U R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxybxxwxxrxbxxbxbrxxrxxrx.webp",
    "cubeCode": "xxxxybxxwxxrxbxxbxbrxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-18",
    "category": "F2L",
    "caseNumber": 18,
    "subgroup": "3. Corner pointing up, edge in top",
    "name": "F2L Case 18",
    "alias": "3. Corner pointing up, edge in top",
    "algorithm": "(F' U2 F U) (F' U' F)",
    "alternates": [
      "y' ( R' U2 R U ) ( R' U' R )"
    ],
    "imagePath": "/assets/cubes/xxxxyxxrwxbrxbxxbxbxxxrxxrx.webp",
    "cubeCode": "xxxxyxxrwxbrxbxxbxbxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-19",
    "category": "F2L",
    "caseNumber": 19,
    "subgroup": "3. Corner pointing up, edge in top",
    "name": "F2L Case 19",
    "alias": "3. Corner pointing up, edge in top",
    "algorithm": "(U R U2 R') (U R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xbxxyxxxwxxrxbxxbxbxxxrxxrx.webp",
    "cubeCode": "xbxxyxxxwxxrxbxxbxbxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-20",
    "category": "F2L",
    "caseNumber": 20,
    "subgroup": "3. Corner pointing up, edge in top",
    "name": "F2L Case 20",
    "alias": "3. Corner pointing up, edge in top",
    "algorithm": "(U' F' U2 F) (U' F' U F)",
    "alternates": [
      "y' ( U' R' U2 R ) ( U' R' U R )"
    ],
    "imagePath": "/assets/cubes/xxxryxxxwxxrxbxxbxbxxxrxxrx.webp",
    "cubeCode": "xxxryxxxwxxrxbxxbxbxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-21",
    "category": "F2L",
    "caseNumber": 21,
    "subgroup": "3. Corner pointing up, edge in top",
    "name": "F2L Case 21",
    "alias": "3. Corner pointing up, edge in top",
    "algorithm": "U2 (R U R' U) (R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxbyxxxwxxrxbxxbxbxxxrxxrx.webp",
    "cubeCode": "xxxbyxxxwxxrxbxxbxbxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-22",
    "category": "F2L",
    "caseNumber": 22,
    "subgroup": "3. Corner pointing up, edge in top",
    "name": "F2L Case 22",
    "alias": "3. Corner pointing up, edge in top",
    "algorithm": "U2 (F' U' F U') (F' U F)",
    "alternates": [
      "y' U2 ( R' U' R U' ) ( R' U R )"
    ],
    "imagePath": "/assets/cubes/xrxxyxxxwxxrxbxxbxbxxxrxxrx.webp",
    "cubeCode": "xrxxyxxxwxxrxbxxbxbxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-23",
    "category": "F2L",
    "caseNumber": 23,
    "subgroup": "3. Corner pointing up, edge in top",
    "name": "F2L Case 23",
    "alias": "3. Corner pointing up, edge in top",
    "algorithm": "(R U R' U') U' (R U R' U') (R U R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxbwxrrxbxxbxbxxxrxxrx.webp",
    "cubeCode": "xxxxyxxbwxrrxbxxbxbxxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-24",
    "category": "F2L",
    "caseNumber": 24,
    "subgroup": "3. Corner pointing up, edge in top",
    "name": "F2L Case 24",
    "alias": "3. Corner pointing up, edge in top",
    "algorithm": "y' (R' U' R U) U (R' U' R U) (R' U' R)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyrxxwxxrxbxxbxbbxxrxxrx.webp",
    "cubeCode": "xxxxyrxxwxxrxbxxbxbbxxrxxrx",
    "verified": true
  },
  {
    "id": "f2l-25",
    "category": "F2L",
    "caseNumber": 25,
    "subgroup": "4. Corner in top, edge in middle",
    "name": "F2L Case 25",
    "alias": "4. Corner in top, edge in middle",
    "algorithm": "(U F' U F) (U F' U2 F)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxrxxbxbbxbxwxxrrxxrx.webp",
    "cubeCode": "xxxxyxxxrxxbxbbxbxwxxrrxxrx",
    "verified": true
  },
  {
    "id": "f2l-26",
    "category": "F2L",
    "caseNumber": 26,
    "subgroup": "4. Corner in top, edge in middle",
    "name": "F2L Case 26",
    "alias": "4. Corner in top, edge in middle",
    "algorithm": "(U' R U' R') (U' R U2 R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxbxxwxbbxbxrxxrrxxrx.webp",
    "cubeCode": "xxxxyxxxbxxwxbbxbxrxxrrxxrx",
    "verified": true
  },
  {
    "id": "f2l-27",
    "category": "F2L",
    "caseNumber": 27,
    "subgroup": "4. Corner in top, edge in middle",
    "name": "F2L Case 27",
    "alias": "4. Corner in top, edge in middle",
    "algorithm": "(U F' U' F) (d' F U F')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxrxxbxbrxbxwxxbrxxrx.webp",
    "cubeCode": "xxxxyxxxrxxbxbrxbxwxxbrxxrx",
    "verified": true
  },
  {
    "id": "f2l-28",
    "category": "F2L",
    "caseNumber": 28,
    "subgroup": "4. Corner in top, edge in middle",
    "name": "F2L Case 28",
    "alias": "4. Corner in top, edge in middle",
    "algorithm": "(U' R U R') (d R' U' R)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxbxxwxbrxbxrxxbrxxrx.webp",
    "cubeCode": "xxxxyxxxbxxwxbrxbxrxxbrxxrx",
    "verified": true
  },
  {
    "id": "f2l-29",
    "category": "F2L",
    "caseNumber": 29,
    "subgroup": "4. Corner in top, edge in middle",
    "name": "F2L Case 29",
    "alias": "4. Corner in top, edge in middle",
    "algorithm": "(R U' R') (d R' U R)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxwxxrxbrxbxbxxbrxxrx.webp",
    "cubeCode": "xxxxyxxxwxxrxbrxbxbxxbrxxrx",
    "verified": true
  },
  {
    "id": "f2l-30",
    "category": "F2L",
    "caseNumber": 30,
    "subgroup": "4. Corner in top, edge in middle",
    "name": "F2L Case 30",
    "alias": "4. Corner in top, edge in middle",
    "algorithm": "(R U R' U') (R U R' U') (R U R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxwxxrxbbxbxbxxrrxxrx.webp",
    "cubeCode": "xxxxyxxxwxxrxbbxbxbxxrrxxrx",
    "verified": true
  },
  {
    "id": "f2l-31",
    "category": "F2L",
    "caseNumber": 31,
    "subgroup": "5. Corner in bottom, edge in top",
    "name": "F2L Case 31",
    "alias": "5. Corner in bottom, edge in top",
    "algorithm": "(U R U' R') (U' F' U F)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxrxxbxxbxxbbxxxxrxrrx.webp",
    "cubeCode": "xxxxyxxrxxbxxbxxbbxxxxrxrrx",
    "verified": true
  },
  {
    "id": "f2l-32",
    "category": "F2L",
    "caseNumber": 32,
    "subgroup": "5. Corner in bottom, edge in top",
    "name": "F2L Case 32",
    "alias": "5. Corner in bottom, edge in top",
    "algorithm": "(U' F' U F) (U R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxybxxxxxxxbxxbbxrxxrxrrx.webp",
    "cubeCode": "xxxxybxxxxxxxbxxbbxrxxrxrrx",
    "verified": true
  },
  {
    "id": "f2l-33",
    "category": "F2L",
    "caseNumber": 33,
    "subgroup": "5. Corner in bottom, edge in top",
    "name": "F2L Case 33",
    "alias": "5. Corner in bottom, edge in top",
    "algorithm": "(F' U F) (U' F' U F)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxrxxbxxbxxbrxxxxrxwrx.webp",
    "cubeCode": "xxxxyxxrxxbxxbxxbrxxxxrxwrx",
    "verified": true
  },
  {
    "id": "f2l-34",
    "category": "F2L",
    "caseNumber": 34,
    "subgroup": "5. Corner in bottom, edge in top",
    "name": "F2L Case 34",
    "alias": "5. Corner in bottom, edge in top",
    "algorithm": "(R U' R') (U R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxybxxxxxxxbxxbwxrxxrxbrx.webp",
    "cubeCode": "xxxxybxxxxxxxbxxbwxrxxrxbrx",
    "verified": true
  },
  {
    "id": "f2l-35",
    "category": "F2L",
    "caseNumber": 35,
    "subgroup": "5. Corner in bottom, edge in top",
    "name": "F2L Case 35",
    "alias": "5. Corner in bottom, edge in top",
    "algorithm": "(R U R') (U' R U R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxybxxxxxxxbxxbrxrxxrxwrx.webp",
    "cubeCode": "xxxxybxxxxxxxbxxbrxrxxrxwrx",
    "verified": true
  },
  {
    "id": "f2l-36",
    "category": "F2L",
    "caseNumber": 36,
    "subgroup": "5. Corner in bottom, edge in top",
    "name": "F2L Case 36",
    "alias": "5. Corner in bottom, edge in top",
    "algorithm": "(F' U' F) (U F' U' F)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxrxxbxxbxxbwxxxxrxbrx.webp",
    "cubeCode": "xxxxyxxrxxbxxbxxbwxxxxrxbrx",
    "verified": true
  },
  {
    "id": "f2l-37",
    "category": "F2L",
    "caseNumber": 37,
    "subgroup": "6. Corner in bottom, edge in middle",
    "name": "F2L Case 37",
    "alias": "6. Corner in bottom, edge in middle",
    "algorithm": "(R U' R' U) R U2 R' (U R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxxxxxxbbxbrxxxrrxwrx.webp",
    "cubeCode": "xxxxyxxxxxxxxbbxbrxxxrrxwrx",
    "verified": true
  },
  {
    "id": "f2l-38",
    "category": "F2L",
    "caseNumber": 38,
    "subgroup": "6. Corner in bottom, edge in middle",
    "name": "F2L Case 38",
    "alias": "6. Corner in bottom, edge in middle",
    "algorithm": "(R U' R' U') (R U R' U') (R U2 R')",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxxxxxxbbxbwxxxrrxbrx.webp",
    "cubeCode": "xxxxyxxxxxxxxbbxbwxxxrrxbrx",
    "verified": true
  },
  {
    "id": "f2l-39",
    "category": "F2L",
    "caseNumber": 39,
    "subgroup": "6. Corner in bottom, edge in middle",
    "name": "F2L Case 39",
    "alias": "6. Corner in bottom, edge in middle",
    "algorithm": "(R U R' U') (R U' R') U d (R' U' R)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxxxxxxbrxbrxxxbrxwrx.webp",
    "cubeCode": "xxxxyxxxxxxxxbrxbrxxxbrxwrx",
    "verified": true
  },
  {
    "id": "f2l-40",
    "category": "F2L",
    "caseNumber": 40,
    "subgroup": "6. Corner in bottom, edge in middle",
    "name": "F2L Case 40",
    "alias": "6. Corner in bottom, edge in middle",
    "algorithm": "(R U' R') d (R' U' R U') (R' U' R)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxxxxxxbrxbwxxxbrxbrx.webp",
    "cubeCode": "xxxxyxxxxxxxxbrxbwxxxbrxbrx",
    "verified": true
  },
  {
    "id": "f2l-41",
    "category": "F2L",
    "caseNumber": 41,
    "subgroup": "6. Corner in bottom, edge in middle",
    "name": "F2L Case 41",
    "alias": "6. Corner in bottom, edge in middle",
    "algorithm": "(R U' R' d R' U2 R) (U R' U2 R)",
    "alternates": [],
    "imagePath": "/assets/cubes/xxxxyxxxxxxxxbrxbbxxxbrxrrx.webp",
    "cubeCode": "xxxxyxxxxxxxxbrxbbxxxbrxrrx",
    "verified": true
  }
];

export const OLL_CASES: AlgorithmCase[] = [
  {
    "id": "oll-27",
    "category": "OLL",
    "caseNumber": 27,
    "subgroup": "Crosses",
    "name": "OLL 27",
    "alias": "Sune",
    "algorithm": "(R' U2 R) U (R' U R)",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_27.webp",
    "verified": true
  },
  {
    "id": "oll-26",
    "category": "OLL",
    "caseNumber": 26,
    "subgroup": "Crosses",
    "name": "OLL 26",
    "alias": "Anti-Sune",
    "algorithm": "(R U2 R') U' (R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_26.webp",
    "verified": true
  },
  {
    "id": "oll-25",
    "category": "OLL",
    "caseNumber": 25,
    "subgroup": "Crosses",
    "name": "OLL 25",
    "alias": "Cross Bowtie",
    "algorithm": "F' (r U R' U') (r' F R)",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_25.webp",
    "verified": true
  },
  {
    "id": "oll-24",
    "category": "OLL",
    "caseNumber": 24,
    "subgroup": "Crosses",
    "name": "OLL 24",
    "alias": "Cross Chameleon",
    "algorithm": "(r U R' U') (r' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_24.webp",
    "verified": true
  },
  {
    "id": "oll-22",
    "category": "OLL",
    "caseNumber": 22,
    "subgroup": "Crosses",
    "name": "OLL 22",
    "alias": "Cross Pi",
    "algorithm": "R U2 (R2' U' R2 U') (R2' U2 R)",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_22.webp",
    "verified": true
  },
  {
    "id": "oll-21",
    "category": "OLL",
    "caseNumber": 21,
    "subgroup": "Crosses",
    "name": "OLL 21",
    "alias": "Cross H",
    "algorithm": "(R U R') U (R U' R') U (R U2 R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_21.webp",
    "verified": true
  },
  {
    "id": "oll-23",
    "category": "OLL",
    "caseNumber": 23,
    "subgroup": "Crosses",
    "name": "OLL 23",
    "alias": "Cross Headlights",
    "algorithm": "R2 D (R' U2 R) D' (R' U2 R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_23.webp",
    "verified": true
  },
  {
    "id": "oll-01",
    "category": "OLL",
    "caseNumber": 1,
    "subgroup": "Dots",
    "name": "OLL 1",
    "alias": "Runway",
    "algorithm": "(R U2 R') (R' F R F') U2 (R' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_1.webp",
    "verified": true
  },
  {
    "id": "oll-02",
    "category": "OLL",
    "caseNumber": 2,
    "subgroup": "Dots",
    "name": "OLL 2",
    "alias": "Zamboni",
    "algorithm": "F (R U R' U') F' f (R U R' U') f'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_2.webp",
    "verified": true
  },
  {
    "id": "oll-04",
    "category": "OLL",
    "caseNumber": 4,
    "subgroup": "Dots",
    "name": "OLL 4",
    "alias": "Y-Dot",
    "algorithm": "f (R U R' U') f' U F (R U R' U') F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_4.webp",
    "verified": true
  },
  {
    "id": "oll-03",
    "category": "OLL",
    "caseNumber": 3,
    "subgroup": "Dots",
    "name": "OLL 3",
    "alias": "Anti-Zamboni",
    "algorithm": "f (R U R' U') f' U' F (R U R' U') F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_3.webp",
    "verified": true
  },
  {
    "id": "oll-19",
    "category": "OLL",
    "caseNumber": 19,
    "subgroup": "Dots",
    "name": "OLL 19",
    "alias": "Bunny",
    "algorithm": "M U (R U R' U') M' (R' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_19.webp",
    "verified": true
  },
  {
    "id": "oll-18",
    "category": "OLL",
    "caseNumber": 18,
    "subgroup": "Dots",
    "name": "OLL 18",
    "alias": "Crown",
    "algorithm": "F (R U R' U) y' R' U2 (R' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_18.webp",
    "verified": true
  },
  {
    "id": "oll-17",
    "category": "OLL",
    "caseNumber": 17,
    "subgroup": "Dots",
    "name": "OLL 17",
    "alias": "Slash",
    "algorithm": "(R U R' U) (R' F R F') U2 (R' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_17.webp",
    "verified": true
  },
  {
    "id": "oll-20",
    "category": "OLL",
    "caseNumber": 20,
    "subgroup": "Dots",
    "name": "OLL 20",
    "alias": "X-Dot",
    "algorithm": "M U (R U R' U') M2 (U R U' r')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_20.webp",
    "verified": true
  },
  {
    "id": "oll-57",
    "category": "OLL",
    "caseNumber": 57,
    "subgroup": "All Corners",
    "name": "OLL 57",
    "alias": "H-Shape",
    "algorithm": "(R U R' U') M' (U R U' r')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_57.webp",
    "verified": true
  },
  {
    "id": "oll-28",
    "category": "OLL",
    "caseNumber": 28,
    "subgroup": "All Corners",
    "name": "OLL 28",
    "alias": "Stealth",
    "algorithm": "M' U' M U2' M' U' M",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_28.webp",
    "verified": true
  },
  {
    "id": "oll-55",
    "category": "OLL",
    "caseNumber": 55,
    "subgroup": "Lines",
    "name": "OLL 55",
    "alias": "Highway",
    "algorithm": "R U2 R2 (U' R U' R') U2 (F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_55.webp",
    "verified": true
  },
  {
    "id": "oll-52",
    "category": "OLL",
    "caseNumber": 52,
    "subgroup": "Lines",
    "name": "OLL 52",
    "alias": "Rice Cooker",
    "algorithm": "(R U R' U) R d' R U' R' F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_52.webp",
    "verified": true
  },
  {
    "id": "oll-51",
    "category": "OLL",
    "caseNumber": 51,
    "subgroup": "Lines",
    "name": "OLL 51",
    "alias": "Bottle Cap",
    "algorithm": "f (R U R' U') (R U R' U') f'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_51.webp",
    "verified": true
  },
  {
    "id": "oll-56",
    "category": "OLL",
    "caseNumber": 56,
    "subgroup": "Lines",
    "name": "OLL 56",
    "alias": "Street",
    "algorithm": "F (R U R' U') R F' (r U R' U') r'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_56.webp",
    "verified": true
  },
  {
    "id": "oll-45",
    "category": "OLL",
    "caseNumber": 45,
    "subgroup": "Ts",
    "name": "OLL 45",
    "alias": "T-Shape 2",
    "algorithm": "F (R U R' U') F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_45.webp",
    "verified": true
  },
  {
    "id": "oll-33",
    "category": "OLL",
    "caseNumber": 33,
    "subgroup": "Ts",
    "name": "OLL 33",
    "alias": "T-Shape 1",
    "algorithm": "(R U R' U') (R' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_33.webp",
    "verified": true
  },
  {
    "id": "oll-40",
    "category": "OLL",
    "caseNumber": 40,
    "subgroup": "Zs",
    "name": "OLL 40",
    "alias": "Lightning Bolt 2",
    "algorithm": "R' F (R U R' U') F' U R",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_40.webp",
    "verified": true
  },
  {
    "id": "oll-39",
    "category": "OLL",
    "caseNumber": 39,
    "subgroup": "Zs",
    "name": "OLL 39",
    "alias": "Lightning Bolt 1",
    "algorithm": "L F' (L' U' L U) F U' L'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_39.webp",
    "verified": true
  },
  {
    "id": "oll-14",
    "category": "OLL",
    "caseNumber": 14,
    "subgroup": "Big Ls",
    "name": "OLL 14",
    "alias": "Anti-Gun",
    "algorithm": "(R' F R) U (R' F' R) y' (R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_14.webp",
    "verified": true
  },
  {
    "id": "oll-13",
    "category": "OLL",
    "caseNumber": 13,
    "subgroup": "Big Ls",
    "name": "OLL 13",
    "alias": "Gun",
    "algorithm": "F (U R U' R2) F' (R U R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_13.webp",
    "verified": true
  },
  {
    "id": "oll-16",
    "category": "OLL",
    "caseNumber": 16,
    "subgroup": "Big Ls",
    "name": "OLL 16",
    "alias": "Anti-Squeegee",
    "algorithm": "r U r' (R U R' U') r U' r'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_16.webp",
    "verified": true
  },
  {
    "id": "oll-15",
    "category": "OLL",
    "caseNumber": 15,
    "subgroup": "Big Ls",
    "name": "OLL 15",
    "alias": "Squeegee",
    "algorithm": "l' U' l (L' U' L U) l' U l",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_15.webp",
    "verified": true
  },
  {
    "id": "oll-46",
    "category": "OLL",
    "caseNumber": 46,
    "subgroup": "Cs",
    "name": "OLL 46",
    "alias": "C-Shape",
    "algorithm": "R' U' (R' F R F') U R",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_46.webp",
    "verified": true
  },
  {
    "id": "oll-34",
    "category": "OLL",
    "caseNumber": 34,
    "subgroup": "Cs",
    "name": "OLL 34",
    "alias": "City",
    "algorithm": "(R U R' U') x D' R' U R U' D x'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_34.webp",
    "verified": true
  },
  {
    "id": "oll-38",
    "category": "OLL",
    "caseNumber": 38,
    "subgroup": "Ws",
    "name": "OLL 38",
    "alias": "W-Shape 2",
    "algorithm": "(R U R' U) (R U' R' U') (R' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_38.webp",
    "verified": true
  },
  {
    "id": "oll-36",
    "category": "OLL",
    "caseNumber": 36,
    "subgroup": "Ws",
    "name": "OLL 36",
    "alias": "W-Shape 1",
    "algorithm": "(L' U' L U') (L' U L U) (L F' L' F)",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_36.webp",
    "verified": true
  },
  {
    "id": "oll-44",
    "category": "OLL",
    "caseNumber": 44,
    "subgroup": "Ps",
    "name": "OLL 44",
    "alias": "P-Shape 2",
    "algorithm": "f (R U R' U') f'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_44.webp",
    "verified": true
  },
  {
    "id": "oll-43",
    "category": "OLL",
    "caseNumber": 43,
    "subgroup": "Ps",
    "name": "OLL 43",
    "alias": "P-Shape 1",
    "algorithm": "f' (L' U' L U) f",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_43.webp",
    "verified": true
  },
  {
    "id": "oll-31",
    "category": "OLL",
    "caseNumber": 31,
    "subgroup": "Ps",
    "name": "OLL 31",
    "alias": "Couch",
    "algorithm": "R' U' F U R U' R' F' R",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_31.webp",
    "verified": true
  },
  {
    "id": "oll-32",
    "category": "OLL",
    "caseNumber": 32,
    "subgroup": "Ps",
    "name": "OLL 32",
    "alias": "Anti-Couch",
    "algorithm": "F U R U' F' r U R' U' r'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_32.webp",
    "verified": true
  },
  {
    "id": "oll-35",
    "category": "OLL",
    "caseNumber": 35,
    "subgroup": "Squares",
    "name": "OLL 35",
    "alias": "Fish Salad",
    "algorithm": "(R U2 R') (R' F R F') (R U2 R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_35.webp",
    "verified": true
  },
  {
    "id": "oll-37",
    "category": "OLL",
    "caseNumber": 37,
    "subgroup": "Squares",
    "name": "OLL 37",
    "alias": "Mounted",
    "algorithm": "F R' F' R U R U' R'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_37.webp",
    "verified": true
  },
  {
    "id": "oll-05",
    "category": "OLL",
    "caseNumber": 5,
    "subgroup": "Squares",
    "name": "OLL 5",
    "alias": "Right Square",
    "algorithm": "r' U2 (R U R' U) r",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_5.webp",
    "verified": true
  },
  {
    "id": "oll-06",
    "category": "OLL",
    "caseNumber": 6,
    "subgroup": "Squares",
    "name": "OLL 6",
    "alias": "Left Square",
    "algorithm": "r U2 R' U' R U' r'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_6.webp",
    "verified": true
  },
  {
    "id": "oll-48",
    "category": "OLL",
    "caseNumber": 48,
    "subgroup": "Little Ls",
    "name": "OLL 48",
    "alias": "Breakneck",
    "algorithm": "F (R U R' U') (R U R' U') F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_48.webp",
    "verified": true
  },
  {
    "id": "oll-47",
    "category": "OLL",
    "caseNumber": 47,
    "subgroup": "Little Ls",
    "name": "OLL 47",
    "alias": "Anti-Breakneck",
    "algorithm": "F' (L' U' L U) (L' U' L U) F",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_47.webp",
    "verified": true
  },
  {
    "id": "oll-50",
    "category": "OLL",
    "caseNumber": 50,
    "subgroup": "Little Ls",
    "name": "OLL 50",
    "alias": "Anti-Kite",
    "algorithm": "R' F R2 B' R2' F' R2 B R'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_50.webp",
    "verified": true
  },
  {
    "id": "oll-49",
    "category": "OLL",
    "caseNumber": 49,
    "subgroup": "Little Ls",
    "name": "OLL 49",
    "alias": "Kite",
    "algorithm": "(R' F R' F') R2 U2 y (R' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_49.webp",
    "verified": true
  },
  {
    "id": "oll-53",
    "category": "OLL",
    "caseNumber": 53,
    "subgroup": "Little Ls",
    "name": "OLL 53",
    "alias": "Frying Pan",
    "algorithm": "(l' U' L U') (L' U L U') L' U2 l",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_53.webp",
    "verified": true
  },
  {
    "id": "oll-54",
    "category": "OLL",
    "caseNumber": 54,
    "subgroup": "Little Ls",
    "name": "OLL 54",
    "alias": "Anti-Frying Pan",
    "algorithm": "(r U R' U) (R U' R' U) R U2' r'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_54.webp",
    "verified": true
  },
  {
    "id": "oll-11",
    "category": "OLL",
    "caseNumber": 11,
    "subgroup": "Other shapes",
    "name": "OLL 11",
    "alias": "Flying Falcon",
    "algorithm": "F' (L' U' L U) F y F (R U R' U') F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_11.webp",
    "verified": true
  },
  {
    "id": "oll-12",
    "category": "OLL",
    "caseNumber": 12,
    "subgroup": "Other shapes",
    "name": "OLL 12",
    "alias": "Hawk",
    "algorithm": "F (R U R' U') F' U F (R U R' U') F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_12.webp",
    "verified": true
  },
  {
    "id": "oll-07",
    "category": "OLL",
    "caseNumber": 7,
    "subgroup": "Other shapes",
    "name": "OLL 7",
    "alias": "Lightning",
    "algorithm": "(r U R' U) R U2 r'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_7.webp",
    "verified": true
  },
  {
    "id": "oll-08",
    "category": "OLL",
    "caseNumber": 8,
    "subgroup": "Other shapes",
    "name": "OLL 8",
    "alias": "Reverse Lightning",
    "algorithm": "r' U' R U' R' U2 r",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_8.webp",
    "verified": true
  },
  {
    "id": "oll-10",
    "category": "OLL",
    "caseNumber": 10,
    "subgroup": "Other shapes",
    "name": "OLL 10",
    "alias": "Anti-Copperhead",
    "algorithm": "(R U R' U) (R' F R F') R U2 R'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_10.webp",
    "verified": true
  },
  {
    "id": "oll-09",
    "category": "OLL",
    "caseNumber": 9,
    "subgroup": "Other shapes",
    "name": "OLL 9",
    "alias": "Copperhead",
    "algorithm": "(R U R' U') R' F R2 U R' U' F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_9.webp",
    "verified": true
  },
  {
    "id": "oll-29",
    "category": "OLL",
    "caseNumber": 29,
    "subgroup": "Other shapes",
    "name": "OLL 29",
    "alias": "Spotted Camouflage",
    "algorithm": "(R U R' U') R U' R' F' U' (F R U R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_29.webp",
    "verified": true
  },
  {
    "id": "oll-42",
    "category": "OLL",
    "caseNumber": 42,
    "subgroup": "Other shapes",
    "name": "OLL 42",
    "alias": "Awkward Fish 2",
    "algorithm": "(R' F R F') (R' F R F') (R U R' U') (R U R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_42.webp",
    "verified": true
  },
  {
    "id": "oll-41",
    "category": "OLL",
    "caseNumber": 41,
    "subgroup": "Other shapes",
    "name": "OLL 41",
    "alias": "Awkward Fish 1",
    "algorithm": "(R U R' U) R U2 R' F (R U R' U') F'",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_41.webp",
    "verified": true
  },
  {
    "id": "oll-30",
    "category": "OLL",
    "caseNumber": 30,
    "subgroup": "Other shapes",
    "name": "OLL 30",
    "alias": "Stripe",
    "algorithm": "(L F' L' F) L' U2 L d (R U R')",
    "alternates": [],
    "imagePath": "/assets/cubes/oll_30.webp",
    "verified": true
  }
];

export const PLL_CASES: AlgorithmCase[] = [
  {
    "id": "pll-h",
    "category": "PLL",
    "caseNumber": "H",
    "subgroup": "Edges only",
    "name": "H Permutation",
    "alias": "H Perm",
    "algorithm": "(M2 U M2) U2 (M2 U M2)",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_H.webp",
    "verified": true
  },
  {
    "id": "pll-z",
    "category": "PLL",
    "caseNumber": "Z",
    "subgroup": "Edges only",
    "name": "Z Permutation",
    "alias": "Z Perm",
    "algorithm": "R' U' R2 U (R U R' U') R U R U' R U' R' U2",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Z.webp",
    "verified": true
  },
  {
    "id": "pll-ua",
    "category": "PLL",
    "caseNumber": "Ua",
    "subgroup": "Edges only",
    "name": "Ua Permutation",
    "alias": "Ua Perm",
    "algorithm": "R2 U' (R' U' R) U R U (R U' R)",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Ua.webp",
    "verified": true
  },
  {
    "id": "pll-ub",
    "category": "PLL",
    "caseNumber": "Ub",
    "subgroup": "Edges only",
    "name": "Ub Permutation",
    "alias": "Ub Perm",
    "algorithm": "(R' U R' U') R' U' (R' U R) U R2",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Ub.webp",
    "verified": true
  },
  {
    "id": "pll-aa",
    "category": "PLL",
    "caseNumber": "Aa",
    "subgroup": "Corners only",
    "name": "Aa Permutation",
    "alias": "Aa Perm",
    "algorithm": "x z' R2 U2 (R' D' R) U2 (R' D R') z x'",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Aa.webp",
    "verified": true
  },
  {
    "id": "pll-ab",
    "category": "PLL",
    "caseNumber": "Ab",
    "subgroup": "Corners only",
    "name": "Ab Permutation",
    "alias": "Ab Perm",
    "algorithm": "x R2 D2 (R U R') D2 (R U' R) x'",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Ab.webp",
    "verified": true
  },
  {
    "id": "pll-e",
    "category": "PLL",
    "caseNumber": "E",
    "subgroup": "Corners only",
    "name": "E Permutation",
    "alias": "E Perm",
    "algorithm": "R2 U R' U' y (R U R' U') (R U R' U') (R U R') y' (R U' R2')",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_E.webp",
    "verified": true
  },
  {
    "id": "pll-t",
    "category": "PLL",
    "caseNumber": "T",
    "subgroup": "Edges and corners",
    "name": "T Permutation",
    "alias": "T Perm",
    "algorithm": "(R U R' U') R' F R2 U' R' U' R U R' F'",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_T.webp",
    "verified": true
  },
  {
    "id": "pll-y",
    "category": "PLL",
    "caseNumber": "Y",
    "subgroup": "Edges and corners",
    "name": "Y Permutation",
    "alias": "Y Perm",
    "algorithm": "(F R U' R') U' (R U R' F') (R U R' U') (R' F R F')",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Y.webp",
    "verified": true
  },
  {
    "id": "pll-f",
    "category": "PLL",
    "caseNumber": "F",
    "subgroup": "Edges and corners",
    "name": "F Permutation",
    "alias": "F Perm",
    "algorithm": "U' (R' U R U') R2 (F' U' F U) x (R U R' U') R2 x'",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_F.webp",
    "verified": true
  },
  {
    "id": "pll-v",
    "category": "PLL",
    "caseNumber": "V",
    "subgroup": "Edges and corners",
    "name": "V Permutation",
    "alias": "V Perm",
    "algorithm": "(R' U R' U') y (R' D R' D') R2 y' (R' B' R B R)",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_V.webp",
    "verified": true
  },
  {
    "id": "pll-ja",
    "category": "PLL",
    "caseNumber": "Ja",
    "subgroup": "Edges and corners",
    "name": "Ja Permutation",
    "alias": "Ja Perm",
    "algorithm": "L' U' L F (L' U' L U) L F' L2 U L U",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Ja.webp",
    "verified": true
  },
  {
    "id": "pll-jb",
    "category": "PLL",
    "caseNumber": "Jb",
    "subgroup": "Edges and corners",
    "name": "Jb Permutation",
    "alias": "Jb Perm",
    "algorithm": "R U R' F' (R U R' U') R' F R2 U' R' U'",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Jb.webp",
    "verified": true
  },
  {
    "id": "pll-ra",
    "category": "PLL",
    "caseNumber": "Ra",
    "subgroup": "Edges and corners",
    "name": "Ra Permutation",
    "alias": "Ra Perm",
    "algorithm": "(L U2 L') U2 L F' (L' U' L U) L F L2 U",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Ra.webp",
    "verified": true
  },
  {
    "id": "pll-rb",
    "category": "PLL",
    "caseNumber": "Rb",
    "subgroup": "Edges and corners",
    "name": "Rb Permutation",
    "alias": "Rb Perm",
    "algorithm": "(R' U2 R) U2 R' F (R U R' U') R' F' R2 U'",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Rb.webp",
    "verified": true
  },
  {
    "id": "pll-na",
    "category": "PLL",
    "caseNumber": "Na",
    "subgroup": "Edges and corners",
    "name": "Na Permutation",
    "alias": "Na Perm",
    "algorithm": "(R U R' U) (R U R' F') (R U R' U') R' F R2 U' R' U2 (R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Na.webp",
    "verified": true
  },
  {
    "id": "pll-nb",
    "category": "PLL",
    "caseNumber": "Nb",
    "subgroup": "Edges and corners",
    "name": "Nb Permutation",
    "alias": "Nb Perm",
    "algorithm": "(R' U R U') R' (F' U' F) (R U R' F) R' F' (R U' R)",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Nb.webp",
    "verified": true
  },
  {
    "id": "pll-ga",
    "category": "PLL",
    "caseNumber": "Ga",
    "subgroup": "Edges and corners",
    "name": "Ga Permutation",
    "alias": "Ga Perm",
    "algorithm": "y R2' u (R' U R' U') (R u' R2) y' (R' U R)",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Ga.webp",
    "verified": true
  },
  {
    "id": "pll-gb",
    "category": "PLL",
    "caseNumber": "Gb",
    "subgroup": "Edges and corners",
    "name": "Gb Permutation",
    "alias": "Gb Perm",
    "algorithm": "(R' U' R) y R2 u (R' U R U') (R u' R2)",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Gb.webp",
    "verified": true
  },
  {
    "id": "pll-gc",
    "category": "PLL",
    "caseNumber": "Gc",
    "subgroup": "Edges and corners",
    "name": "Gc Permutation",
    "alias": "Gc Perm",
    "algorithm": "y R2' u' R U' (R U R' u) R2 y (R U' R')",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Gc.webp",
    "verified": true
  },
  {
    "id": "pll-gd",
    "category": "PLL",
    "caseNumber": "Gd",
    "subgroup": "Edges and corners",
    "name": "Gd Permutation",
    "alias": "Gd Perm",
    "algorithm": "y2 (R U R') y' (R2 u' R) U' (R' U R') u R2",
    "alternates": [],
    "imagePath": "/assets/cubes/pll_Gd.webp",
    "verified": true
  }
];

export const ALL_ALGORITHMS: AlgorithmCase[] = [
  ...F2L_CASES,
  ...OLL_CASES,
  ...PLL_CASES
];

export const TOTAL_ALGORITHMS_COUNT = ALL_ALGORITHMS.length;

// XP Tiers
export interface XpTier {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
}

export const XP_TIERS: XpTier[] = [
  { level: 1, title: 'NOVICE CUBER', minXp: 0, maxXp: 99 },
  { level: 2, title: 'ALGO APPRENTICE', minXp: 100, maxXp: 299 },
  { level: 3, title: 'F2L SPECIALIST', minXp: 300, maxXp: 599 },
  { level: 4, title: 'OLL MASTER', minXp: 600, maxXp: 999 },
  { level: 5, title: 'PLL EXECUTIONER', minXp: 1000, maxXp: 1499 },
  { level: 6, title: 'SUB-20 SPEEDCUBER', minXp: 1500, maxXp: 2199 },
  { level: 7, title: 'FINGERTRICK ACE', minXp: 2200, maxXp: 2999 },
  { level: 8, title: 'SUB-15 PRO', minXp: 3000, maxXp: 3999 },
  { level: 9, title: 'ALGORITHM TITAN', minXp: 4000, maxXp: 5499 },
  { level: 10, title: 'SPEED DEMON', minXp: 5500, maxXp: 999999 }
];

export function getXpTier(xp: number): XpTier {
  for (let i = XP_TIERS.length - 1; i >= 0; i--) {
    if (xp >= XP_TIERS[i].minXp) {
      return XP_TIERS[i];
    }
  }
  return XP_TIERS[0];
}

export function searchAlgorithms(
  algorithms: AlgorithmCase[],
  query: string,
  category: 'ALL' | 'F2L' | 'OLL' | 'PLL' | 'SAVED',
  statusFilter: 'ALL' | 'MASTERED' | 'LEARNING' | 'UNLEARNED',
  progress: UserProgress
): AlgorithmCase[] {
  const cleanQuery = query.trim().toLowerCase();

  return algorithms.filter((algo) => {
    // 1. Category check
    if (category === 'SAVED') {
      if (!progress.saved[algo.id]) return false;
    } else if (category !== 'ALL') {
      if (algo.category !== category) return false;
    }

    // 2. Status filter check
    if (statusFilter === 'MASTERED' && !progress.mastered[algo.id]) return false;
    if (statusFilter === 'LEARNING' && (!progress.learning[algo.id] || progress.mastered[algo.id])) return false;
    if (statusFilter === 'UNLEARNED' && (progress.mastered[algo.id] || progress.learning[algo.id])) return false;

    // 3. Search query check
    if (!cleanQuery) return true;

    const matchesName = algo.name.toLowerCase().includes(cleanQuery);
    const matchesAlias = algo.alias ? algo.alias.toLowerCase().includes(cleanQuery) : false;
    const matchesCase = String(algo.caseNumber).toLowerCase().includes(cleanQuery);
    const matchesSubgroup = algo.subgroup.toLowerCase().includes(cleanQuery);
    const matchesAlgorithm = algo.algorithm.toLowerCase().replace(/[\s()'\/]/g, '').includes(cleanQuery.replace(/[\s()'\/]/g, ''));
    const matchesId = algo.id.toLowerCase().includes(cleanQuery);

    return matchesName || matchesAlias || matchesCase || matchesSubgroup || matchesAlgorithm || matchesId;
  });
}
