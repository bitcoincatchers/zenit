// ============================================================================
// ACRO ZENITH - Complete Training Application
// Fully hardcoded data with Private Library functionality
// ============================================================================

// ============================================================================
// HARDCODED DATA - EXERCISE LIBRARY (60 exercises total)
// ============================================================================
const HARDCODED_EXERCISES = [
  // === NEW EXERCISES (13 total) ===
  { id: 'new1', name: 'andrew kip up correction', video_url: 'https://youtu.be/5XuIYRf1g3E', category: 'Acrobatics', difficulty: 'Advanced', isNew: true },
  { id: 'new2', name: 'correction flow', video_url: 'https://youtu.be/zlZf0hC9Zwo', category: 'Flow', difficulty: 'Intermediate', isNew: true },
  { id: 'new3', name: '180 dynamic jumps', video_url: 'https://youtube.com/shorts/hxINEltjIBs', category: 'Macaco', difficulty: 'Advanced', isNew: true },
  { id: 'new4', name: 'bkick jump', video_url: 'https://youtube.com/shorts/tNgDYOhFKA4', category: 'Acrobatics', difficulty: 'Advanced', isNew: true },
  { id: 'new5', name: 'bkick prep', video_url: 'https://youtube.com/shorts/TxUHGmWgFaE', category: 'Acrobatics', difficulty: 'Intermediate', isNew: true },
  { id: 'new6', name: 'corrections kick up', video_url: 'https://youtube.com/shorts/dXkAovBzu4k', category: 'Handstands', difficulty: 'Intermediate', isNew: true },
  { id: 'new7', name: 'knee pike push ups', video_url: 'https://youtube.com/shorts/34G2k_Ch_FQ', category: 'Handstands', difficulty: 'Intermediate', isNew: true },
  { id: 'new8', name: 'Macaco Jump', video_url: 'https://youtube.com/shorts/VJZDUTs1jdw', category: 'Macaco', difficulty: 'Advanced', isNew: true },
  { id: 'new9', name: 'reversed push ups', video_url: 'https://youtube.com/shorts/ZG1MwCv7eKo', category: 'Core', difficulty: 'Intermediate', isNew: true },
  { id: 'new10', name: 'video feedback andrew', video_url: 'https://youtube.com/shorts/SR1qMypWs2k', category: 'Acrobatics', difficulty: 'Intermediate', isNew: true },
  { id: 'new11', name: 'November 25, 2025', video_url: 'https://youtube.com/shorts/J-nLNQSRIMU', category: 'Flow', difficulty: 'Advanced', isNew: true },
  { id: 'new12', name: 'HANDSTAND PROGRESSION', video_url: 'https://youtube.com/shorts/Xh1muXzGN4A', category: 'Handstands', difficulty: 'Beginner', isNew: true },
  { id: 'new13', name: 'HANDSTAND FEEDBACK', video_url: 'https://youtube.com/shorts/M_EPDHPBp18', category: 'Handstands', difficulty: 'Intermediate', isNew: true },
  { id: 'new14', name: 'BACKROLL ELBOWS', video_url: 'https://youtube.com/shorts/hiUk1AXtl_M', category: 'Acrobatics', difficulty: 'Advanced', isNew: true },
  
  // === ORIGINAL 46 EXERCISES ===
  { id: 'ex1', name: 'B Kick Progression', video_url: 'https://youtube.com/shorts/Rp74AUkzBJg', category: 'Acrobatics', difficulty: 'Intermediate' },
  { id: 'ex2', name: 'Back plank dynamic taps', video_url: 'https://youtube.com/shorts/4oFyQr7PZN8', category: 'Core', difficulty: 'Intermediate' },
  { id: 'ex3', name: 'Back roll stand up', video_url: 'https://youtube.com/shorts/f1Q_zw6-3qg', category: 'Acrobatics', difficulty: 'Beginner' },
  { id: 'ex4', name: 'Cartwheel prep', video_url: 'https://youtube.com/shorts/-jLhYFTQNRg', category: 'Cartwheels', difficulty: 'Beginner' },
  { id: 'ex5', name: 'Crow/Frogstand Prep', video_url: 'https://youtube.com/shorts/VvJ_Jf7b8LQ', category: 'Handstands', difficulty: 'Beginner' },
  { id: 'ex6', name: 'Deep squat', video_url: 'https://youtube.com/shorts/Tf9bZ0LzM4s', category: 'Legs', difficulty: 'Beginner' },
  { id: 'ex7', name: 'Dynamic bridge hold', video_url: 'https://youtube.com/shorts/D62KNAQDmx8', category: 'Flexibility', difficulty: 'Intermediate' },
  { id: 'ex8', name: 'Dynamic straddle pancake floor', video_url: 'https://youtube.com/shorts/aPQ2noCBgZs', category: 'Flexibility', difficulty: 'Intermediate' },
  { id: 'ex9', name: 'Elevated pike push ups', video_url: 'https://youtube.com/shorts/oEGIxX2N5QE', category: 'Handstands', difficulty: 'Intermediate' },
  { id: 'ex10', name: 'Flow practice', video_url: 'https://youtube.com/shorts/VZfR6rZLXJ0', category: 'Flow', difficulty: 'Advanced' },
  { id: 'ex11', name: 'Front roll', video_url: 'https://youtube.com/shorts/c42V94rndjw', category: 'Acrobatics', difficulty: 'Beginner' },
  { id: 'ex12', name: 'Handstand', video_url: 'https://youtube.com/shorts/S2nJ3Rt-GYE', category: 'Handstands', difficulty: 'Advanced' },
  { id: 'ex13', name: 'Headstand push up', video_url: 'https://youtube.com/shorts/SxIQSCnqfT4', category: 'Handstands', difficulty: 'Advanced' },
  { id: 'ex14', name: 'How to front roll', video_url: 'https://youtube.com/shorts/CFNX9NXnWZM', category: 'Acrobatics', difficulty: 'Beginner' },
  { id: 'ex15', name: 'L sit floor', video_url: 'https://youtube.com/shorts/AIVMM5rnUqI', category: 'L-sit', difficulty: 'Advanced' },
  { id: 'ex16', name: 'L sit one leg ext - other tuck', video_url: 'https://youtube.com/shorts/UZdU2u0vcKE', category: 'L-sit', difficulty: 'Intermediate' },
  { id: 'ex17', name: 'L sit tuck floor', video_url: 'https://youtube.com/shorts/fXaRlGQ0aec', category: 'L-sit', difficulty: 'Beginner' },
  { id: 'ex18', name: 'L2V press progressio', video_url: 'https://youtube.com/shorts/LdkH-aqHAng', category: 'Handstands', difficulty: 'Advanced' },
  { id: 'ex19', name: 'Leg swings', video_url: 'https://youtube.com/shorts/g8YqM2WZFWo', category: 'Flexibility', difficulty: 'Beginner' },
  { id: 'ex20', name: 'Macaco', video_url: 'https://youtube.com/shorts/Clqo7-VifMg', category: 'Macaco', difficulty: 'Advanced' },
  { id: 'ex21', name: 'Wall L Sit', video_url: 'https://youtube.com/shorts/Clqo7-VifMg', category: 'L-sit', difficulty: 'Intermediate' },
  { id: 'ex22', name: 'Middle split pancake', video_url: 'https://youtube.com/shorts/2CPh7wUYFDY', category: 'Flexibility', difficulty: 'Intermediate' },
  { id: 'ex23', name: 'Negative assisted pistol squat', video_url: 'https://youtube.com/shorts/nGEfAvLvRSo', category: 'Legs', difficulty: 'Intermediate' },
  { id: 'ex24', name: 'Negative push ups', video_url: 'https://youtube.com/shorts/Rh1a1j1Aevs', category: 'Core', difficulty: 'Beginner' },
  { id: 'ex25', name: 'Pike push ups', video_url: 'https://youtube.com/shorts/Dx8jZiQGnLc', category: 'Handstands', difficulty: 'Beginner' },
  { id: 'ex26', name: 'Pistol Squat', video_url: 'https://youtube.com/shorts/7TwNGJNwLT4', category: 'Legs', difficulty: 'Advanced' },
  { id: 'ex27', name: 'Plank Shoulder Taps', video_url: 'https://youtube.com/shorts/O2daqj_8X_c', category: 'Core', difficulty: 'Beginner' },
  { id: 'ex28', name: 'Positive assisted pistol squat', video_url: 'https://youtube.com/shorts/YYH9VJVvHpo', category: 'Legs', difficulty: 'Intermediate' },
  { id: 'ex29', name: 'Prep Headstand Push Up', video_url: 'https://youtube.com/shorts/1AlW2YlrKBs', category: 'Handstands', difficulty: 'Intermediate' },
  { id: 'ex30', name: 'Push ups', video_url: 'https://youtube.com/shorts/YmWoUB0ZRLI', category: 'Core', difficulty: 'Beginner' },
  { id: 'ex31', name: 'Shoulder stand back roll', video_url: 'https://youtube.com/shorts/wZHCMUWuHEM', category: 'Acrobatics', difficulty: 'Intermediate' },
  { id: 'ex32', name: 'Shoulder stand prep', video_url: 'https://youtube.com/shorts/IFx-qwS_M_s', category: 'Acrobatics', difficulty: 'Beginner' },
  { id: 'ex33', name: 'Shrimp squat', video_url: 'https://youtube.com/shorts/2_DvZlf4jSk', category: 'Legs', difficulty: 'Intermediate' },
  { id: 'ex34', name: 'Squat jumps', video_url: 'https://youtube.com/shorts/SbI-b8vk4nQ', category: 'Legs', difficulty: 'Beginner' },
  { id: 'ex35', name: 'Squat prep', video_url: 'https://youtube.com/shorts/fZSGuwHnrHA', category: 'Legs', difficulty: 'Beginner' },
  { id: 'ex36', name: 'Straight bridge floor', video_url: 'https://youtube.com/shorts/2Vb8SzKZVtw', category: 'Flexibility', difficulty: 'Beginner' },
  { id: 'ex37', name: 'Straight leg pike pancake to deep squat', video_url: 'https://youtube.com/shorts/ZMkYrG1MZMU', category: 'Flexibility', difficulty: 'Intermediate' },
  { id: 'ex38', name: 'Straddle L Sit', video_url: 'https://youtube.com/shorts/pAvKJpWjGZs', category: 'L-sit', difficulty: 'Intermediate' },
  { id: 'ex39', name: 'V SIT FLOOR', video_url: 'https://youtube.com/shorts/GxMqWJBzWNA', category: 'Core', difficulty: 'Advanced' },
  { id: 'ex40', name: 'Wall Ankle flex', video_url: 'https://youtube.com/shorts/CgUjX7i7yYc', category: 'Flexibility', difficulty: 'Beginner' },
  { id: 'ex41', name: 'Wall Assisted Handstand', video_url: 'https://youtube.com/shorts/Q8pbJ4AUzBY', category: 'Handstands', difficulty: 'Beginner' },
  { id: 'ex42', name: 'Wall cartwheel', video_url: 'https://youtube.com/shorts/Wie0c1Uwc5g', category: 'Cartwheels', difficulty: 'Intermediate' },
  { id: 'ex43', name: 'Wall headstand', video_url: 'https://youtube.com/shorts/Q1-sqYlqLDw', category: 'Handstands', difficulty: 'Beginner' },
  { id: 'ex44', name: 'Wall Lizard', video_url: 'https://youtube.com/shorts/oe14CrIDUyI', category: 'Flexibility', difficulty: 'Beginner' },
  { id: 'ex45', name: 'Wall back walk', video_url: 'https://youtube.com/shorts/1n7-92R_RnI', category: 'Flexibility', difficulty: 'Advanced' },
  { id: 'ex46', name: 'Wall cartwheel', video_url: 'https://youtube.com/shorts/Wie0c1Uwc5g', category: 'Cartwheels', difficulty: 'Intermediate' }
];

// ============================================================================
// HARDCODED DATA - CONDITIONING LIBRARY (89 exercises total)
// ============================================================================
const HARDCODED_CONDITIONING = [
  // === ABS (30 exercises) ===
  { id: 'abs1', name: 'WALK TO TUCK', video_url: 'https://youtube.com/shorts/M_rG4Ovwkbc', category: 'ABS' },
  { id: 'abs2', name: 'Side core crunch', video_url: 'https://youtube.com/shorts/LfCm52tNUgw', category: 'ABS' },
  { id: 'abs3', name: 'Alternate Crunch', video_url: 'https://youtube.com/shorts/rBXOjmGcbEM', category: 'ABS' },
  { id: 'abs4', name: 'Videoleap 6BABC5F2 7C19 49C9 B109 3C85CEC6ED52', video_url: 'https://youtube.com/shorts/kZGGDRrtTEc', category: 'ABS' },
  { id: 'abs5', name: 'Back neck hold', video_url: 'https://youtube.com/shorts/-4H2H3JzW9U', category: 'ABS' },
  { id: 'abs6', name: 'TOE TAPS', video_url: 'https://youtube.com/shorts/4vIsRKKikeg', category: 'ABS' },
  { id: 'abs7', name: 'TOE TAP CRUNCH', video_url: 'https://youtube.com/shorts/pgie0zNIR2Y', category: 'ABS' },
  { id: 'abs8', name: 'STARFISH CRUNCH', video_url: 'https://youtube.com/shorts/IfCdR9mZ-Ys', category: 'ABS' },
  { id: 'abs9', name: 'SPIDER PLANK', video_url: 'https://youtube.com/shorts/2Y46dDdAjS4', category: 'ABS' },
  { id: 'abs10', name: 'SINGLE LEG REACH', video_url: 'https://youtube.com/shorts/HxzOdmSqI0w', category: 'ABS' },
  { id: 'abs11', name: 'SINGLE LEG CRUNCH', video_url: 'https://youtube.com/shorts/J0CVfnvZhMo', category: 'ABS' },
  { id: 'abs12', name: 'SIDE TAPS', video_url: 'https://youtube.com/shorts/cFdmQq5eH1w', category: 'ABS' },
  { id: 'abs13', name: 'SIDE TAP EXTENSIONS', video_url: 'https://youtube.com/shorts/jx2phyr0SGw', category: 'ABS' },
  { id: 'abs14', name: 'SIDE PLANK THREAD THE NEEDLE', video_url: 'https://youtube.com/shorts/izccbB5EovE', category: 'ABS' },
  { id: 'abs15', name: 'SIDE ELBOW PLANK THREAD A NEEDLE', video_url: 'https://youtube.com/shorts/xxlR-PSmgys', category: 'ABS' },
  { id: 'abs16', name: 'PLANK SIDE CRUNCHES', video_url: 'https://youtube.com/shorts/RBGQoXKrKMI', category: 'ABS' },
  { id: 'abs17', name: 'SIDE CRUNCH', video_url: 'https://youtube.com/shorts/j2m0CENt-x8', category: 'ABS' },
  { id: 'abs18', name: 'SEATED ABS CIRCLES', video_url: 'https://youtube.com/shorts/6c-BXYcZP24', category: 'ABS' },
  { id: 'abs19', name: 'RUSSIAN TWIST', video_url: 'https://youtube.com/shorts/HomKAEfQNtA', category: 'ABS' },
  { id: 'abs20', name: 'RUSSIAN TWIST ELEVATED KNEES', video_url: 'https://youtube.com/shorts/9Q4vIXpcBc8', category: 'ABS' },
  { id: 'abs21', name: 'RUSSIAN TWIST BENT KNEES', video_url: 'https://youtube.com/shorts/piz6Cv-78g4', category: 'ABS' },
  { id: 'abs22', name: 'RUSSIAN SWINGS KNEE LIFT', video_url: 'https://youtube.com/shorts/SpNAD1NQ3_E', category: 'ABS' },
  { id: 'abs23', name: 'REACH CRUNCH', video_url: 'https://youtube.com/shorts/2WJYAYc78Hw', category: 'ABS' },
  { id: 'abs24', name: 'PLANK TOE TAPS', video_url: 'https://youtube.com/shorts/CVcJ6FXvkLo', category: 'ABS' },
  { id: 'abs25', name: 'PLANK TO TUCK', video_url: 'https://youtube.com/shorts/NruM9KP3gN0', category: 'ABS' },
  { id: 'abs26', name: 'PLANK SWINGS', video_url: 'https://youtube.com/shorts/51eNG4VMnL8', category: 'ABS' },
  { id: 'abs27', name: 'OBLIQUE KICKS', video_url: 'https://youtube.com/shorts/w56HcPsACHM', category: 'ABS' },
  { id: 'abs28', name: 'OBLIQUE ABS CRUNCHES', video_url: 'https://youtube.com/shorts/oGXqIl2lums', category: 'ABS' },
  { id: 'abs29', name: 'NEGATIVE CRUNCHES', video_url: 'https://youtube.com/shorts/XKRtsyB_QvY', category: 'ABS' },
  { id: 'abs30', name: 'MOUNTAIN CLIMBERS ELBOW : UP', video_url: 'https://youtube.com/shorts/feZadhghLXI', category: 'ABS' },
  
  // === PUSH UPS (29 exercises) ===
  { id: 'push1', name: 'MOUNTAIN CLIMBER TOUCH AND HOLD', video_url: 'https://youtube.com/shorts/P-jj3G7PU2o', category: 'Push Ups' },
  { id: 'push2', name: 'LYING KNEE RAISE', video_url: 'https://youtube.com/shorts/aT2UvlRzAS4', category: 'Push Ups' },
  { id: 'push3', name: 'LOW RAISES', video_url: 'https://youtube.com/shorts/MGijbksTyeQ', category: 'Push Ups' },
  { id: 'push4', name: 'LEG RAISE KICK', video_url: 'https://youtube.com/shorts/Bwx6wgNrC0s', category: 'Push Ups' },
  { id: 'push5', name: 'LEG RAISE HOLD', video_url: 'https://youtube.com/shorts/2MWqfjkDpRM', category: 'Push Ups' },
  { id: 'push6', name: 'KNEE SLIDE CRUNCH', video_url: 'https://youtube.com/shorts/0GWiy3IiK3o', category: 'Push Ups' },
  { id: 'push7', name: 'KICKOUT V SITS', video_url: 'https://youtube.com/shorts/msAf_LxbVNA', category: 'Push Ups' },
  { id: 'push8', name: 'KICKOUT SIDE EXTENSIONS', video_url: 'https://youtube.com/shorts/pj2vjCA2mT8', category: 'Push Ups' },
  { id: 'push9', name: 'HEEL TAPS', video_url: 'https://youtube.com/shorts/K6TGdx7MqSo', category: 'Push Ups' },
  { id: 'push10', name: 'HEADSTAND TWIST', video_url: 'https://youtube.com/shorts/O1pjCPmIkJo', category: 'Push Ups' },
  { id: 'push11', name: 'EXTERNAL KNEE REACH', video_url: 'https://youtube.com/shorts/JQqRFPA7ap4', category: 'Push Ups' },
  { id: 'push12', name: 'ELEVATED SINGLE LEG EXTENSIONS', video_url: 'https://youtube.com/shorts/5Z3TVSzPgsI', category: 'Push Ups' },
  { id: 'push13', name: 'ELEVATED SCISSORS', video_url: 'https://youtube.com/shorts/3clKxgK6qsc', category: 'Push Ups' },
  { id: 'push14', name: 'ELBOW PLANK', video_url: 'https://youtube.com/shorts/2jOb4tElDWE', category: 'Push Ups' },
  { id: 'push15', name: 'ELBOW PLANK RAISES', video_url: 'https://youtube.com/shorts/Y-oeTYkfIuA', category: 'Push Ups' },
  { id: 'push16', name: 'CROSSED MOUNTAIN CLIMBERS', video_url: 'https://youtube.com/shorts/g_VLBdXDvwI', category: 'Push Ups' },
  { id: 'push17', name: 'CROSSED MOUNTAIN CLIMBER KICK', video_url: 'https://youtube.com/shorts/obXTgr0uBss', category: 'Push Ups' },
  { id: 'push18', name: 'CRAB LEG RAISE', video_url: 'https://youtube.com/shorts/1CdnWh8QUJQ', category: 'Push Ups' },
  { id: 'push19', name: 'CLAP CRUNCHES', video_url: 'https://youtube.com/shorts/NLA4OiyvWtg', category: 'Push Ups' },
  { id: 'push20', name: 'CLAP CRUNCH', video_url: 'https://youtube.com/shorts/AnEW5Z-7Xko', category: 'Push Ups' },
  { id: 'push21', name: 'CLAP CRUNCH 1', video_url: 'https://youtube.com/shorts/oChGRf4csV0', category: 'Push Ups' },
  { id: 'push22', name: 'BUTTERFLIES', video_url: 'https://youtube.com/shorts/ODysHgCD3UE', category: 'Push Ups' },
  { id: 'push23', name: 'as', video_url: 'https://youtube.com/shorts/DqalTmJPrfI', category: 'Push Ups' },
  { id: 'push24', name: 'ALTERNATE CRUNCHES', video_url: 'https://youtube.com/shorts/TNNNfxS9RQg', category: 'Push Ups' },
  { id: 'push25', name: 'ALTERNATE CRUNCH', video_url: 'https://youtube.com/shorts/HNROvCYr0f0', category: 'Push Ups' },
  { id: 'push26', name: 'Using a wall to make push ups Easier - Harder', video_url: 'https://youtube.com/shorts/NUiZ3tT54PY', category: 'Push Ups' },
  { id: 'push27', name: 'Push up variations', video_url: 'https://youtube.com/shorts/joY3CFv2kD0', category: 'Push Ups' },
  { id: 'push28', name: 'Basic explosive push ups', video_url: 'https://youtube.com/shorts/ulGDqbd9rmg', category: 'Push Ups' },
  { id: 'push29', name: 'Low arm placement push ups', video_url: 'https://youtube.com/shorts/6Umi8kngDWo', category: 'Push Ups' },
  
  // === SQUATS (25 exercises) ===
  { id: 'squat1', name: 'Explosive push up placements', video_url: 'https://youtube.com/shorts/HOWdgWCiiME', category: 'Squats' },
  { id: 'squat2', name: 'Plank leg raises', video_url: 'https://youtube.com/shorts/JGiWOiDfP8c', category: 'Squats' },
  { id: 'squat3', name: 'Explosive push ups (arms only)', video_url: 'https://youtube.com/shorts/j8blTVwxmec', category: 'Squats' },
  { id: 'squat4', name: 'Archer Push Ups + Diamond', video_url: 'https://youtube.com/shorts/XlPxwkDzwJU', category: 'Squats' },
  { id: 'squat5', name: 'plank holds', video_url: 'https://youtube.com/shorts/5bq8le0w3QU', category: 'Squats' },
  { id: 'squat6', name: 'Plank Arm Raises', video_url: 'https://youtube.com/shorts/ESJuHopMPRE', category: 'Squats' },
  { id: 'squat7', name: 'Positive side squat', video_url: 'https://youtube.com/shorts/9Iigv7ybySU', category: 'Squats' },
  { id: 'squat8', name: 'positive pistol squat', video_url: 'https://youtube.com/shorts/bnEJw-elJe4', category: 'Squats' },
  { id: 'squat9', name: 'Squats with Elastic Band', video_url: 'https://youtube.com/shorts/rWN4b_XFLEk', category: 'Squats' },
  { id: 'squat10', name: 'assisted squats', video_url: 'https://youtube.com/shorts/3jJYIrERBdY', category: 'Squats' },
  { id: 'squat11', name: 'Assisted Squat Progression', video_url: 'https://youtube.com/shorts/87dosm6Bkgw', category: 'Squats' },
  { id: 'squat12', name: 'Hip Openers', video_url: 'https://youtube.com/shorts/NtZz4TdG6JI', category: 'Squats' },
  { id: 'squat13', name: 'Assisted Deep Squat (Side)', video_url: 'https://youtube.com/shorts/eN4lXfgxIYY', category: 'Squats' },
  { id: 'squat14', name: 'Double Leg Knee Taps', video_url: 'https://youtube.com/shorts/gMDlhOiJpRs', category: 'Squats' },
  { id: 'squat15', name: 'Deep Squat Inward knee taps', video_url: 'https://youtube.com/shorts/cfjZcrFEnaM', category: 'Squats' },
  { id: 'squat16', name: 'Deep Squat External Knee Taps', video_url: 'https://youtube.com/shorts/lPXphqGNQ6E', category: 'Squats' },
  { id: 'squat17', name: 'SL Hip Opener', video_url: 'https://youtube.com/shorts/MSstJZDRWcE', category: 'Squats' },
  { id: 'squat18', name: 'Calve Raises', video_url: 'https://youtube.com/shorts/WuaBxfZyg3w', category: 'Squats' },
  { id: 'squat19', name: 'Assisted Pistol Squat ( SIDE )', video_url: 'https://youtube.com/shorts/nzSXoNLS_0U', category: 'Squats' },
  { id: 'squat20', name: 'Deep to sissy squat', video_url: 'https://youtube.com/shorts/Zt3y1cKnjk8', category: 'Squats' },
  { id: 'squat21', name: 'Positive Assisted Pistol Squat', video_url: 'https://youtube.com/shorts/T3u9J5mSzPY', category: 'Squats' },
  { id: 'squat22', name: 'Assisted Squat (Side)', video_url: 'https://youtube.com/shorts/gVToAyTCAKE', category: 'Squats' },
  { id: 'squat23', name: 'Negative Assisted pistol Squat', video_url: 'https://youtube.com/shorts/hX-CCz3PDFM', category: 'Squats' },
  { id: 'squat24', name: 'Knee Taps on Wall', video_url: 'https://youtube.com/shorts/KzRNFBAWlHg', category: 'Squats' },
  { id: 'squat25', name: 'Deep squat Jump', video_url: 'https://youtube.com/shorts/4Sih1tFa5xA', category: 'Squats' },
  
  // === NEW CONDITIONING (5 exercises) ===
  { id: 'cond_new1', name: 'knee pike push ups', video_url: 'https://youtube.com/shorts/34G2k_Ch_FQ', category: 'Push Ups', isNew: true },
  { id: 'cond_new2', name: 'Macaco Jump', video_url: 'https://youtube.com/shorts/VJZDUTs1jdw', category: 'ABS', isNew: true },
  { id: 'cond_new3', name: 'reversed push ups', video_url: 'https://youtube.com/shorts/ZG1MwCv7eKo', category: 'Push Ups', isNew: true },
  { id: 'cond_new4', name: 'video feedback andrew', video_url: 'https://youtube.com/shorts/SR1qMypWs2k', category: 'ABS', isNew: true },
  { id: 'cond_new5', name: 'November 25, 2025', video_url: 'https://youtube.com/shorts/J-nLNQSRIMU', category: 'ABS', isNew: true }
];

// ============================================================================
// HARDCODED DATA - 5 DAY TRAINING PROGRAM
// ============================================================================
const HARDCODED_PROGRAM = {
  id: 'prog1',
  name: '5 Day Training Program',
  weeks: [
    {
      id: 'week1',
      name: 'Foundation Week',
      order_index: 1,
      days: [
        {
          id: 'day1',
          name: 'Day 1 - Handstands & Core',
          order_index: 1,
          exercises: [
            { exercise_id: 'ex5', exercise_name: 'Crow/Frogstand Prep', exercise_video_url: 'https://youtube.com/shorts/VvJ_Jf7b8LQ', sets: 3, reps: 10, order_index: 1 },
            { exercise_id: 'ex41', exercise_name: 'Wall Assisted Handstand', exercise_video_url: 'https://youtube.com/shorts/Q8pbJ4AUzBY', sets: 3, reps: 10, order_index: 2 },
            { exercise_id: 'ex43', exercise_name: 'Wall headstand', exercise_video_url: 'https://youtube.com/shorts/Q1-sqYlqLDw', sets: 3, reps: 10, order_index: 3 },
            { exercise_id: 'ex25', exercise_name: 'Pike push ups', exercise_video_url: 'https://youtube.com/shorts/Dx8jZiQGnLc', sets: 3, reps: 10, order_index: 4 },
            { exercise_id: 'ex30', exercise_name: 'Push ups', exercise_video_url: 'https://youtube.com/shorts/YmWoUB0ZRLI', sets: 3, reps: 10, order_index: 5 },
            { exercise_id: 'ex27', exercise_name: 'Plank Shoulder Taps', exercise_video_url: 'https://youtube.com/shorts/O2daqj_8X_c', sets: 3, reps: 10, order_index: 6 },
            { exercise_id: 'ex17', exercise_name: 'L sit tuck floor', exercise_video_url: 'https://youtube.com/shorts/fXaRlGQ0aec', sets: 2, reps: 10, order_index: 7 }
          ]
        },
        {
          id: 'day2',
          name: 'Day 2 - Flexibility & Legs',
          order_index: 2,
          exercises: [
            { exercise_id: 'ex44', exercise_name: 'Wall Lizard', exercise_video_url: 'https://youtube.com/shorts/oe14CrIDUyI', sets: 2, reps: 10, order_index: 1 },
            { exercise_id: 'ex40', exercise_name: 'Wall Ankle flex', exercise_video_url: 'https://youtube.com/shorts/CgUjX7i7yYc', sets: 2, reps: 10, order_index: 2 },
            { exercise_id: 'ex19', exercise_name: 'Leg swings', exercise_video_url: 'https://youtube.com/shorts/g8YqM2WZFWo', sets: 2, reps: 10, order_index: 3 },
            { exercise_id: 'ex36', exercise_name: 'Straight bridge floor', exercise_url: 'https://youtube.com/shorts/2Vb8SzKZVtw', sets: 2, reps: 10, order_index: 4 },
            { exercise_id: 'ex22', exercise_name: 'Middle split pancake', exercise_video_url: 'https://youtube.com/shorts/2CPh7wUYFDY', sets: 2, reps: 10, order_index: 5 },
            { exercise_id: 'ex35', exercise_name: 'Squat prep', exercise_video_url: 'https://youtube.com/shorts/fZSGuwHnrHA', sets: 3, reps: 10, order_index: 6 },
            { exercise_id: 'ex6', exercise_name: 'Deep squat', exercise_video_url: 'https://youtube.com/shorts/Tf9bZ0LzM4s', sets: 3, reps: 10, order_index: 7 },
            { exercise_id: 'ex34', exercise_name: 'Squat jumps', exercise_video_url: 'https://youtube.com/shorts/SbI-b8vk4nQ', sets: 3, reps: 10, order_index: 8 }
          ]
        },
        {
          id: 'day3',
          name: 'Day 3 - Acrobatics & Flow',
          order_index: 3,
          exercises: [
            { exercise_id: 'ex14', exercise_name: 'How to front roll', exercise_video_url: 'https://youtube.com/shorts/CFNX9NXnWZM', sets: 2, reps: 10, order_index: 1 },
            { exercise_id: 'ex11', exercise_name: 'Front roll', exercise_video_url: 'https://youtube.com/shorts/c42V94rndjw', sets: 2, reps: 10, order_index: 2 },
            { exercise_id: 'ex3', exercise_name: 'Back roll stand up', exercise_video_url: 'https://youtube.com/shorts/f1Q_zw6-3qg', sets: 2, reps: 10, order_index: 3 },
            { exercise_id: 'ex32', exercise_name: 'Shoulder stand prep', exercise_video_url: 'https://youtube.com/shorts/IFx-qwS_M_s', sets: 2, reps: 10, order_index: 4 },
            { exercise_id: 'ex31', exercise_name: 'Shoulder stand back roll', exercise_video_url: 'https://youtube.com/shorts/wZHCMUWuHEM', sets: 2, reps: 10, order_index: 5 },
            { exercise_id: 'ex7', exercise_name: 'Dynamic bridge hold', exercise_video_url: 'https://youtube.com/shorts/D62KNAQDmx8', sets: 2, reps: 10, order_index: 6 },
            { exercise_id: 'ex4', exercise_name: 'Cartwheel prep', exercise_video_url: 'https://youtube.com/shorts/-jLhYFTQNRg', sets: 2, reps: 10, order_index: 7 },
            { exercise_id: 'ex1', exercise_name: 'B Kick Progression', exercise_video_url: 'https://youtube.com/shorts/Rp74AUkzBJg', sets: 2, reps: 10, order_index: 8 },
            { exercise_id: 'ex10', exercise_name: 'Flow practice', exercise_video_url: 'https://youtube.com/shorts/VZfR6rZLXJ0', sets: 2, reps: 10, order_index: 9 }
          ]
        },
        {
          id: 'day4',
          name: 'Day 4 - Advanced Legs',
          order_index: 4,
          exercises: [
            { exercise_id: 'ex40', exercise_name: 'Wall Ankle flex', exercise_video_url: 'https://youtube.com/shorts/CgUjX7i7yYc', sets: 2, reps: 10, order_index: 1 },
            { exercise_id: 'ex33', exercise_name: 'Shrimp squat', exercise_video_url: 'https://youtube.com/shorts/2_DvZlf4jSk', sets: 2, reps: 10, order_index: 2 },
            { exercise_id: 'ex23', exercise_name: 'Negative assisted pistol squat', exercise_video_url: 'https://youtube.com/shorts/nGEfAvLvRSo', sets: 2, reps: 10, order_index: 3 },
            { exercise_id: 'ex28', exercise_name: 'Positive assisted pistol squat', exercise_video_url: 'https://youtube.com/shorts/YYH9VJVvHpo', sets: 2, reps: 10, order_index: 4 },
            { exercise_id: 'ex26', exercise_name: 'Pistol Squat', exercise_video_url: 'https://youtube.com/shorts/7TwNGJNwLT4', sets: 2, reps: 10, order_index: 5 },
            { exercise_id: 'ex24', exercise_name: 'Negative push ups', exercise_video_url: 'https://youtube.com/shorts/Rh1a1j1Aevs', sets: 2, reps: 10, order_index: 6 }
          ]
        },
        {
          id: 'day5',
          name: 'Day 5 - Advanced Handstands',
          order_index: 5,
          exercises: [
            { exercise_id: 'ex9', exercise_name: 'Elevated pike push ups', exercise_video_url: 'https://youtube.com/shorts/oEGIxX2N5QE', sets: 3, reps: 10, order_index: 1 },
            { exercise_id: 'ex13', exercise_name: 'Headstand push up', exercise_video_url: 'https://youtube.com/shorts/SxIQSCnqfT4', sets: 3, reps: 10, order_index: 2 },
            { exercise_id: 'ex29', exercise_name: 'Prep Headstand Push Up', exercise_video_url: 'https://youtube.com/shorts/1AlW2YlrKBs', sets: 3, reps: 10, order_index: 3 },
            { exercise_id: 'ex12', exercise_name: 'Handstand', exercise_video_url: 'https://youtube.com/shorts/S2nJ3Rt-GYE', sets: 3, reps: 10, order_index: 4 },
            { exercise_id: 'ex18', exercise_name: 'L2V press progressio', exercise_video_url: 'https://youtube.com/shorts/LdkH-aqHAng', sets: 2, reps: 10, order_index: 5 },
            { exercise_id: 'ex2', exercise_name: 'Back plank dynamic taps', exercise_video_url: 'https://youtube.com/shorts/4oFyQr7PZN8', sets: 2, reps: 10, order_index: 6 },
            { exercise_id: 'ex15', exercise_name: 'L sit floor', exercise_video_url: 'https://youtube.com/shorts/AIVMM5rnUqI', sets: 2, reps: 10, order_index: 7 },
            { exercise_id: 'ex39', exercise_name: 'V SIT FLOOR', exercise_video_url: 'https://youtube.com/shorts/GxMqWJBzWNA', sets: 2, reps: 10, order_index: 8 }
          ]
        }
      ]
    }
  ]
};

// ============================================================================
// APPLICATION STATE
// ============================================================================
const state = {
  currentView: 'my-program',
  exercises: HARDCODED_EXERCISES,
  conditioning: HARDCODED_CONDITIONING,
  program: HARDCODED_PROGRAM,
  privateLibrary: [],
  selectedVideo: null,
  playbackSpeed: 1.0,
  completedDays: [],
  exerciseFilter: 'Most Recent',
  conditioningFilter: 'All'
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================
function getYouTubeVideoId(url) {
  if (!url) return null;
  
  const patterns = [
    /youtube\.com\/shorts\/([^?&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}

function getYouTubeThumbnail(url) {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

function getYouTubeEmbedUrl(url, autoplay = 0) {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&rel=0`;
}

function isHorizontalVideo(url) {
  return url && (url.includes('youtu.be/') || url.includes('watch?v='));
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// ============================================================================
// PRIVATE LIBRARY FUNCTIONS
// ============================================================================
function loadPrivateLibrary() {
  const saved = localStorage.getItem('privateLibrary');
  if (saved) {
    state.privateLibrary = JSON.parse(saved);
  }
}

function savePrivateLibrary() {
  localStorage.setItem('privateLibrary', JSON.stringify(state.privateLibrary));
}

function addToPrivateLibrary(exercise) {
  const exists = state.privateLibrary.some(ex => ex.id === exercise.id);
  if (exists) {
    showToast('⚠️ This video is already in your Private Library');
    return;
  }
  
  state.privateLibrary.push(exercise);
  savePrivateLibrary();
  showToast('✅ Added to Private Library');
  render();
}

function removeFromPrivateLibrary(exerciseId) {
  state.privateLibrary = state.privateLibrary.filter(ex => ex.id !== exerciseId);
  savePrivateLibrary();
  showToast('🗑️ Removed from Private Library');
  render();
}

function clearPrivateLibrary() {
  if (state.privateLibrary.length === 0) {
    showToast('⚠️ Your Private Library is already empty');
    return;
  }
  
  if (confirm('¿Estás seguro de que quieres eliminar TODOS los videos de tu biblioteca privada?')) {
    state.privateLibrary = [];
    savePrivateLibrary();
    showToast('🗑️ Private Library cleared');
    render();
  }
}

// ============================================================================
// VIDEO PLAYER
// ============================================================================
function playVideo(url) {
  state.selectedVideo = url;
  render();
  
  setTimeout(() => {
    const iframe = document.querySelector('#video-modal iframe');
    if (iframe) {
      const embedUrl = getYouTubeEmbedUrl(url, 1);
      iframe.src = embedUrl;
    }
  }, 100);
}

function closeVideo() {
  state.selectedVideo = null;
  render();
}

function changePlaybackSpeed(speed) {
  state.playbackSpeed = speed;
  const iframe = document.querySelector('#video-modal iframe');
  if (iframe) {
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'setPlaybackRate', args: [speed] }), 
      '*'
    );
  }
}

// ============================================================================
// FILTER FUNCTIONS
// ============================================================================
function setExerciseFilter(filter) {
  state.exerciseFilter = filter;
  render();
}

function setConditioningFilter(filter) {
  state.conditioningFilter = filter;
  render();
}

function getFilteredExercises() {
  if (state.exerciseFilter === 'Most Recent') {
    return state.exercises.filter(ex => ex.isNew);
  }
  if (state.exerciseFilter === 'All') {
    return state.exercises;
  }
  return state.exercises.filter(ex => ex.category === state.exerciseFilter);
}

function getFilteredConditioning() {
  if (state.conditioningFilter === 'All') {
    return state.conditioning;
  }
  return state.conditioning.filter(ex => ex.category === state.conditioningFilter);
}

// ============================================================================
// RENDERING FUNCTIONS
// ============================================================================
function renderNavigation() {
  const views = [
    { id: 'my-program', icon: 'fa-calendar-alt', label: 'My Program' },
    { id: 'exercises', icon: 'fa-dumbbell', label: 'Exercises' },
    { id: 'conditioning', icon: 'fa-fire', label: 'Conditioning Library' },
    { id: 'private-library', icon: 'fa-heart', label: 'Private Library' }
  ];
  
  return `
    <nav class="bg-dark-card border-b border-dark-border sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-3">
            <i class="fas fa-fire text-orange text-2xl"></i>
            <h1 class="text-xl font-bold">ACRO ZENITH</h1>
          </div>
          <div class="flex gap-6">
            ${views.map(view => `
              <button
                onclick="state.currentView='${view.id}'; render();"
                class="nav-item px-3 py-2 text-sm font-medium ${state.currentView === view.id ? 'active' : ''}"
              >
                <i class="fas ${view.icon} mr-2"></i>
                ${view.label}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    </nav>
  `;
}

function renderMyProgram() {
  const program = state.program;
  
  return `
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-2">${program.name}</h2>
        <p class="text-gray-400">Complete training program with ${program.weeks[0].days.length} days</p>
      </div>
      
      <div class="space-y-6">
        ${program.weeks[0].days.map(day => `
          <div class="card rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold">${day.name}</h3>
              <button
                onclick="toggleDayStatus('${day.id}')"
                class="btn-${state.completedDays.includes(day.id) ? 'primary' : 'secondary'} px-4 py-2 rounded-lg"
              >
                <i class="fas fa-${state.completedDays.includes(day.id) ? 'check-circle' : 'circle'} mr-2"></i>
                ${state.completedDays.includes(day.id) ? 'Completed' : 'Mark Complete'}
              </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${day.exercises.map(ex => `
                <div class="card rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform" onclick="playVideo('${ex.exercise_video_url}')">
                  <div class="relative">
                    <img 
                      src="${getYouTubeThumbnail(ex.exercise_video_url)}" 
                      alt="${ex.exercise_name}"
                      class="w-full h-40 object-cover rounded mb-3"
                      onerror="this.src='https://via.placeholder.com/320x180/1a1a1a/ffffff?text=No+Preview'"
                    />
                    <div class="absolute inset-0 flex items-center justify-center">
                      <i class="fas fa-play-circle text-orange text-4xl opacity-80"></i>
                    </div>
                  </div>
                  <h4 class="font-semibold mb-2">${ex.exercise_name}</h4>
                  <p class="text-gray-400 text-sm">${ex.sets} sets × ${ex.reps} reps</p>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderExercises() {
  const filtered = getFilteredExercises();
  const categories = ['Most Recent', 'All', ...new Set(state.exercises.map(ex => ex.category))];
  
  return `
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4">Exercise Library</h2>
        <p class="text-gray-400 mb-6">${filtered.length} of ${state.exercises.length} exercises</p>
        
        <div class="flex flex-wrap gap-2">
          ${categories.map(cat => `
            <button
              onclick="setExerciseFilter('${cat}')"
              class="filter-btn ${state.exerciseFilter === cat ? 'active' : ''} px-4 py-2 rounded-lg text-sm"
            >
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.map(ex => {
          const isHorizontal = isHorizontalVideo(ex.video_url);
          return `
            <div class="card rounded-lg p-4 ${isHorizontal ? 'md:col-span-2' : ''}" style="position: relative;">
              ${ex.isNew ? '<span class="badge badge-new" style="position: absolute; top: 8px; right: 8px; z-index: 10;">NEW</span>' : ''}
              <div class="cursor-pointer" onclick="playVideo('${ex.video_url}')">
                <div class="relative">
                  <img 
                    src="${getYouTubeThumbnail(ex.video_url)}" 
                    alt="${ex.name}"
                    class="w-full ${isHorizontal ? 'h-64' : 'h-48'} object-cover rounded mb-3"
                    onerror="this.src='https://via.placeholder.com/320x180/1a1a1a/ffffff?text=No+Preview'"
                  />
                  <div class="absolute inset-0 flex items-center justify-center">
                    <i class="fas fa-play-circle text-orange text-5xl opacity-80"></i>
                  </div>
                </div>
                <h3 class="font-bold text-lg mb-2">${ex.name}</h3>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span class="badge badge-difficulty">${ex.difficulty}</span>
                  <span class="badge badge-category">${ex.category}</span>
                </div>
              </div>
              <button
                onclick="event.stopPropagation(); addToPrivateLibrary(${JSON.stringify(ex).replace(/"/g, '&quot;')})"
                class="btn-secondary w-full px-4 py-2 rounded-lg text-sm"
              >
                <i class="fas fa-heart mr-2"></i>Add to Private Library
              </button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderConditioning() {
  const filtered = getFilteredConditioning();
  const categories = ['All', ...new Set(state.conditioning.map(ex => ex.category))];
  
  return `
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-8">
        <h2 class="text-3xl font-bold mb-4">Conditioning Library</h2>
        <p class="text-gray-400 mb-6">${filtered.length} of ${state.conditioning.length} exercises</p>
        
        <div class="flex flex-wrap gap-2">
          ${categories.map(cat => `
            <button
              onclick="setConditioningFilter('${cat}')"
              class="filter-btn ${state.conditioningFilter === cat ? 'active' : ''} px-4 py-2 rounded-lg text-sm"
            >
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${filtered.map(ex => `
          <div class="card rounded-lg p-4" style="position: relative;">
            ${ex.isNew ? '<span class="badge badge-new" style="position: absolute; top: 8px; right: 8px; z-index: 10;">NEW</span>' : ''}
            <div class="cursor-pointer" onclick="playVideo('${ex.video_url}')">
              <div class="relative">
                <img 
                  src="${getYouTubeThumbnail(ex.video_url)}" 
                  alt="${ex.name}"
                  class="w-full h-48 object-cover rounded mb-3"
                  onerror="this.src='https://via.placeholder.com/320x180/1a1a1a/ffffff?text=No+Preview'"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <i class="fas fa-play-circle text-orange text-5xl opacity-80"></i>
                </div>
              </div>
              <h3 class="font-bold text-lg mb-2">${ex.name}</h3>
              <span class="badge badge-category">${ex.category}</span>
            </div>
            <button
              onclick="event.stopPropagation(); addToPrivateLibrary(${JSON.stringify(ex).replace(/"/g, '&quot;')})"
              class="btn-secondary w-full px-4 py-2 rounded-lg text-sm mt-3"
            >
              <i class="fas fa-heart mr-2"></i>Add to Private Library
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPrivateLibrary() {
  return `
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-8 flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold mb-2">
            <i class="fas fa-heart text-orange mr-3"></i>Private Library
          </h2>
          <p class="text-gray-400">${state.privateLibrary.length} videos saved</p>
        </div>
        ${state.privateLibrary.length > 0 ? `
          <button
            onclick="clearPrivateLibrary()"
            class="btn-secondary px-6 py-3 rounded-lg"
          >
            <i class="fas fa-trash mr-2"></i>Clear All
          </button>
        ` : ''}
      </div>
      
      ${state.privateLibrary.length === 0 ? `
        <div class="text-center py-20">
          <i class="fas fa-heart text-gray-700 text-6xl mb-4"></i>
          <h3 class="text-2xl font-bold mb-2">No videos yet</h3>
          <p class="text-gray-400">Add videos from Exercise Library or Conditioning Library</p>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${state.privateLibrary.map(ex => {
            const isHorizontal = isHorizontalVideo(ex.video_url);
            return `
              <div class="card rounded-lg p-4 ${isHorizontal ? 'md:col-span-2' : ''}">
                <div class="cursor-pointer" onclick="playVideo('${ex.video_url}')">
                  <div class="relative">
                    <img 
                      src="${getYouTubeThumbnail(ex.video_url)}" 
                      alt="${ex.name}"
                      class="w-full ${isHorizontal ? 'h-64' : 'h-48'} object-cover rounded mb-3"
                      onerror="this.src='https://via.placeholder.com/320x180/1a1a1a/ffffff?text=No+Preview'"
                    />
                    <div class="absolute inset-0 flex items-center justify-center">
                      <i class="fas fa-play-circle text-orange text-5xl opacity-80"></i>
                    </div>
                  </div>
                  <h3 class="font-bold text-lg mb-2">${ex.name}</h3>
                  <div class="flex flex-wrap gap-2 mb-3">
                    ${ex.difficulty ? `<span class="badge badge-difficulty">${ex.difficulty}</span>` : ''}
                    <span class="badge badge-category">${ex.category}</span>
                  </div>
                </div>
                <button
                  onclick="event.stopPropagation(); removeFromPrivateLibrary('${ex.id}')"
                  class="btn-secondary w-full px-4 py-2 rounded-lg text-sm"
                >
                  <i class="fas fa-trash mr-2"></i>Remove
                </button>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function renderVideoModal() {
  if (!state.selectedVideo) return '';
  
  return `
    <div class="video-modal" onclick="if(event.target === this) closeVideo()">
      <div class="relative w-full max-w-4xl">
        <button
          onclick="closeVideo()"
          class="absolute -top-12 right-0 text-white text-3xl z-10"
        >
          <i class="fas fa-times"></i>
        </button>
        
        <div class="bg-dark-card rounded-lg overflow-hidden">
          <iframe
            src="${getYouTubeEmbedUrl(state.selectedVideo, 1)}"
            class="w-full"
            style="height: 70vh;"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          
          <div class="p-4 flex items-center justify-center gap-4">
            <span class="text-sm text-gray-400">Playback Speed:</span>
            ${[0.5, 0.75, 1, 1.25, 1.5, 2].map(speed => `
              <button
                onclick="changePlaybackSpeed(${speed})"
                class="filter-btn ${state.playbackSpeed === speed ? 'active' : ''} px-3 py-1 rounded text-sm"
              >
                ${speed}x
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleDayStatus(dayId) {
  if (state.completedDays.includes(dayId)) {
    state.completedDays = state.completedDays.filter(id => id !== dayId);
    showToast('Day marked as incomplete');
  } else {
    state.completedDays.push(dayId);
    showToast('🎉 Day completed!');
  }
  render();
}

// ============================================================================
// MAIN RENDER FUNCTION
// ============================================================================
function render() {
  const app = document.getElementById('app');
  const videoModal = document.getElementById('video-modal');
  
  let content = renderNavigation();
  
  switch(state.currentView) {
    case 'my-program':
      content += renderMyProgram();
      break;
    case 'exercises':
      content += renderExercises();
      break;
    case 'conditioning':
      content += renderConditioning();
      break;
    case 'private-library':
      content += renderPrivateLibrary();
      break;
  }
  
  app.innerHTML = content;
  videoModal.innerHTML = renderVideoModal();
}

// ============================================================================
// INITIALIZATION
// ============================================================================
function init() {
  loadPrivateLibrary();
  render();
  console.log('✅ ACRO ZENITH Loaded');
  console.log(`📚 ${state.exercises.length} exercises`);
  console.log(`💪 ${state.conditioning.length} conditioning exercises`);
  console.log(`📅 ${state.program.weeks[0].days.length} training days`);
  console.log(`❤️ ${state.privateLibrary.length} private videos`);
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
