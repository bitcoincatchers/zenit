// Acro Zenith - Frontend Application (Hardcoded Data Version)
const API_BASE = window.location.origin;

// ============================================
// HARDCODED DATA - All Exercises and Programs
// ============================================

// 67 Main Exercises (46 original + 21 new)
const HARDCODED_EXERCISES = [
  // NEW EXERCISES (Most Recent - 21 exercises)
  { id: 'ex47', name: 'andrew kip up correction', video_url: 'https://youtu.be/5XuIYRf1g3E', category: 'Acrobatics', difficulty: 'Advanced', is_new: true, is_horizontal: true },
  { id: 'ex48', name: 'correction flow', video_url: 'https://youtu.be/zlZf0hC9Zwo', category: 'Flow', difficulty: 'Intermediate', is_new: true, is_horizontal: true },
  { id: 'ex49', name: '180 dynamic jumps', video_url: 'https://youtube.com/shorts/hxINEltjIBs', category: 'Macaco', difficulty: 'Advanced', is_new: true },
  { id: 'ex50', name: 'bkick jump', video_url: 'https://youtube.com/shorts/tNgDYOhFKA4', category: 'Acrobatics', difficulty: 'Advanced', is_new: true },
  { id: 'ex51', name: 'bkick prep', video_url: 'https://youtube.com/shorts/TxUHGmWgFaE', category: 'Acrobatics', difficulty: 'Intermediate', is_new: true },
  { id: 'ex52', name: 'corrections kick up', video_url: 'https://youtube.com/shorts/dXkAovBzu4k', category: 'Handstands', difficulty: 'Intermediate', is_new: true },
  { id: 'ex53', name: 'knee pike push ups', video_url: 'https://youtube.com/shorts/34G2k_Ch_FQ', category: 'Handstands', difficulty: 'Intermediate', is_new: true },
  { id: 'ex54', name: 'Macaco Jump', video_url: 'https://youtube.com/shorts/VJZDUTs1jdw', category: 'Macaco', difficulty: 'Advanced', is_new: true },
  { id: 'ex55', name: 'reversed push ups', video_url: 'https://youtube.com/shorts/ZG1MwCv7eKo', category: 'Core', difficulty: 'Intermediate', is_new: true },
  { id: 'ex56', name: 'video feedback andrew', video_url: 'https://youtube.com/shorts/SR1qMypWs2k', category: 'Acrobatics', difficulty: 'Advanced', is_new: true },
  { id: 'ex57', name: 'November 25, 2025', video_url: 'https://youtube.com/shorts/J-nLNQSRIMU', category: 'Flow', difficulty: 'Intermediate', is_new: true },
  { id: 'ex58', name: 'HANDSTAND PROGRESSION', video_url: 'https://youtube.com/shorts/Xh1muXzGN4A', category: 'Handstands', difficulty: 'Beginner', is_new: true },
  { id: 'ex59', name: 'HANDSTAND FEEDBACK', video_url: 'https://youtube.com/shorts/M_EPDHPBp18', category: 'Handstands', difficulty: 'Intermediate', is_new: true },
  { id: 'ex60', name: 'BACKROLL ELBOWS', video_url: 'https://youtube.com/shorts/hiUk1AXtl_M', category: 'Acrobatics', difficulty: 'Advanced', is_new: true },
  { id: 'ex61', name: 'andrew reeview', video_url: 'https://youtu.be/05E9ep4zfCc', category: 'Acrobatics', difficulty: 'Intermediate', is_new: true, is_horizontal: true },
  { id: 'ex62', name: 'gumbi', video_url: 'https://youtube.com/shorts/rHVZokFGbNI', category: 'Flexibility', difficulty: 'Intermediate', is_new: true },
  { id: 'ex63', name: 'front roundoff', video_url: 'https://youtube.com/shorts/jgkU0EYzMXc', category: 'Acrobatics', difficulty: 'Intermediate', is_new: true },
  { id: 'ex64', name: 'Back roll side', video_url: 'https://youtube.com/shorts/9JDtUH5aQfQ', category: 'Acrobatics', difficulty: 'Intermediate', is_new: true },
  { id: 'ex65', name: 'cart well bent', video_url: 'https://youtube.com/shorts/eDhc0EOJVyM', category: 'Cartwheels', difficulty: 'Beginner', is_new: true },
  { id: 'ex66', name: 'flow variations', video_url: 'https://youtube.com/shorts/zmv-vwdds9o', category: 'Flow', difficulty: 'Intermediate', is_new: true },
  { id: 'ex67', name: 'feedack andrew dec 4th', video_url: 'https://youtu.be/4fdc683XnAA', category: 'Acrobatics', difficulty: 'Advanced', is_new: true, is_horizontal: true },
  
  // ORIGINAL EXERCISES (46 exercises)
  { id: 'ex1', name: 'B Kick Progression', video_url: 'https://youtube.com/shorts/Rp74AUkzBJg', category: 'Acrobatics', difficulty: 'Intermediate' },
  { id: 'ex2', name: 'Back plank dynamic taps', video_url: 'https://youtube.com/shorts/2Huc1GXkEvU', category: 'Core', difficulty: 'Intermediate' },
  { id: 'ex3', name: 'Back roll stand up', video_url: 'https://youtube.com/shorts/pb87bddJzNA', category: 'Acrobatics', difficulty: 'Advanced' },
  { id: 'ex4', name: 'Cartwheels Small - big', video_url: 'https://youtube.com/shorts/w7JBspALZ-Q', category: 'Cartwheels', difficulty: 'Beginner' },
  { id: 'ex5', name: 'Elevated pike push ups', video_url: 'https://youtube.com/shorts/eKm4d-QoR_k', category: 'Handstands', difficulty: 'Intermediate' },
  { id: 'ex6', name: 'Flow #1', video_url: 'https://youtube.com/shorts/83Eg3cpjHOI', category: 'Flow', difficulty: 'Beginner' },
  { id: 'ex7', name: 'Glute + Ankle reverse plank', video_url: 'https://youtube.com/shorts/wsjWZmk8JWc', category: 'Core', difficulty: 'Beginner' },
  { id: 'ex8', name: 'Hamstring bounce', video_url: 'https://youtube.com/shorts/gnTk7lD0B44', category: 'Flexibility', difficulty: 'Beginner' },
  { id: 'ex9', name: 'Hamstring stretch standup', video_url: 'https://youtube.com/shorts/Gw6s_T9I40E', category: 'Flexibility', difficulty: 'Beginner' },
  { id: 'ex10', name: 'Headstand Leg Raises', video_url: 'https://youtube.com/shorts/Xy7xUJFxt-o', category: 'Handstands', difficulty: 'Advanced' },
  { id: 'ex11', name: 'Headstand Tucks', video_url: 'https://youtube.com/shorts/gJq8CZDtWP4', category: 'Handstands', difficulty: 'Advanced' },
  { id: 'ex12', name: 'L sit to reversed plank', video_url: 'https://youtube.com/shorts/338yf98HXrY', category: 'L-sit', difficulty: 'Intermediate' },
  { id: 'ex13', name: 'Macaco', video_url: 'https://youtube.com/shorts/7mTLtN5Nn6E', category: 'Macaco', difficulty: 'Advanced' },
  { id: 'ex14', name: 'One leg wall handstand', video_url: 'https://youtube.com/shorts/v0PJfurfhaw', category: 'Handstands', difficulty: 'Intermediate' },
  { id: 'ex15', name: 'Pike Push ups', video_url: 'https://youtube.com/shorts/lP1eUcFNJuE', category: 'Handstands', difficulty: 'Beginner' },
  { id: 'ex16', name: 'Plank Drags', video_url: 'https://youtube.com/shorts/B7Arp3ToW5w', category: 'Core', difficulty: 'Intermediate' },
  { id: 'ex17', name: 'Reverse plank bounces', video_url: 'https://youtube.com/shorts/HDHKZt4HHsY', category: 'Core', difficulty: 'Intermediate' },
  { id: 'ex18', name: 'Reversed plank hips', video_url: 'https://youtube.com/shorts/zHSCAQM4PqE', category: 'Core', difficulty: 'Beginner' },
  { id: 'ex19', name: 'Shoulder taps', video_url: 'https://youtube.com/shorts/rZmFaeN6ibQ', category: 'Core', difficulty: 'Beginner' },
  { id: 'ex20', name: 'Wall Ankle flex', video_url: 'https://youtube.com/shorts/MJ-1vzcpBGM', category: 'Flexibility', difficulty: 'Beginner' },
  { id: 'ex21', name: 'Wall L Sit', video_url: 'https://youtube.com/shorts/Clqo7-VifMg', category: 'L-sit', difficulty: 'Intermediate' },
  { id: 'ex22', name: 'Cartwheel direction', video_url: 'https://youtube.com/shorts/WWGREv6IG1E', category: 'Cartwheels', difficulty: 'Beginner' },
  { id: 'ex23', name: 'Deep squat jumps', video_url: 'https://youtube.com/shorts/LYFCxCNZBs0', category: 'Legs', difficulty: 'Intermediate' },
  { id: 'ex24', name: 'Deep squat knee taps', video_url: 'https://youtube.com/shorts/a-hg6h9Q_Vk', category: 'Legs', difficulty: 'Beginner' },
  { id: 'ex25', name: 'Dynamic bridge hold', video_url: 'https://youtube.com/shorts/xmyL8bbaPo8', category: 'Flexibility', difficulty: 'Intermediate' },
  { id: 'ex26', name: 'Dynamic squat circle', video_url: 'https://youtube.com/shorts/V523wrw7Bng', category: 'Legs', difficulty: 'Intermediate' },
  { id: 'ex27', name: 'Dynamic squat stretch', video_url: 'https://youtube.com/shorts/JkEN7dq7hFE', category: 'Legs', difficulty: 'Beginner' },
  { id: 'ex28', name: 'Elevated pistol squat', video_url: 'https://youtube.com/shorts/tr55LS8gytc', category: 'Legs', difficulty: 'Advanced' },
  { id: 'ex29', name: 'Headstand body turns', video_url: 'https://youtube.com/shorts/GbH0leRYQnk', category: 'Handstands', difficulty: 'Advanced' },
  { id: 'ex30', name: 'Headstand push up', video_url: 'https://youtube.com/shorts/xB2X2EA1iKE', category: 'Handstands', difficulty: 'Advanced' },
  { id: 'ex31', name: 'Headstand taps', video_url: 'https://youtube.com/shorts/3ENo2wmvqi0', category: 'Handstands', difficulty: 'Advanced' },
  { id: 'ex32', name: 'How to front roll', video_url: 'https://youtube.com/shorts/3erKQ9DCFpU', category: 'Acrobatics', difficulty: 'Beginner' },
  { id: 'ex33', name: 'One leg stand up from plank', video_url: 'https://youtube.com/shorts/CrPCBUSxklI', category: 'Core', difficulty: 'Advanced' },
  { id: 'ex34', name: 'Open legs leg raises', video_url: 'https://youtube.com/shorts/sm3kUwH6PHo', category: 'Core', difficulty: 'Intermediate' },
  { id: 'ex35', name: 'Plank to tuck', video_url: 'https://youtube.com/shorts/2Qpe-jOGwN4', category: 'Core', difficulty: 'Intermediate' },
  { id: 'ex36', name: 'Plank walk to jump', video_url: 'https://youtube.com/shorts/jVNjywJgxOY', category: 'Core', difficulty: 'Advanced' },
  { id: 'ex37', name: 'Reverse plank switch', video_url: 'https://youtube.com/shorts/7OCXKubUueU', category: 'Core', difficulty: 'Intermediate' },
  { id: 'ex38', name: 'Shrimp squat', video_url: 'https://youtube.com/shorts/UoCU1XKY_AM', category: 'Legs', difficulty: 'Advanced' },
  { id: 'ex39', name: 'Sissy squat progression', video_url: 'https://youtube.com/shorts/cBuk2reOxVk', category: 'Legs', difficulty: 'Advanced' },
  { id: 'ex40', name: 'Sitting L sit', video_url: 'https://youtube.com/shorts/UJ3FisSDNRk', category: 'L-sit', difficulty: 'Beginner' },
  { id: 'ex41', name: 'Sitting leg raises', video_url: 'https://youtube.com/shorts/yQdyVZG_ZMs', category: 'Core', difficulty: 'Beginner' },
  { id: 'ex42', name: 'Squat x knee tap', video_url: 'https://youtube.com/shorts/4TnP9dzQH3U', category: 'Legs', difficulty: 'Beginner' },
  { id: 'ex43', name: 'Switch front kicks', video_url: 'https://youtube.com/shorts/Dw8Cgt6Tqus', category: 'Legs', difficulty: 'Intermediate' },
  { id: 'ex44', name: 'Tuck hold', video_url: 'https://youtube.com/shorts/uUTZhn7EUwQ', category: 'Core', difficulty: 'Intermediate' },
  { id: 'ex45', name: 'Wall back walk', video_url: 'https://youtube.com/shorts/1n7-92R_RnI', category: 'Flexibility', difficulty: 'Advanced' },
  { id: 'ex46', name: 'Wall cartwheel', video_url: 'https://youtube.com/shorts/Wie0c1Uwc5g', category: 'Cartwheels', difficulty: 'Intermediate' }
];

// 99 Conditioning Exercises (30 ABS + 29 Push Ups + 25 Squats + 15 New)
const HARDCODED_CONDITIONING = [
  // ABS (30 exercises)
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
  
  // Push Ups (29 exercises)
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
  
  // Squats (25 exercises)
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
  
  // NEW ADDITIONS (15 exercises)
  { id: 'new1', name: 'knee pike push ups', video_url: 'https://youtube.com/shorts/34G2k_Ch_FQ', category: 'Push Ups' },
  { id: 'new2', name: 'Macaco Jump', video_url: 'https://youtube.com/shorts/VJZDUTs1jdw', category: 'ABS' },
  { id: 'new3', name: 'reversed push ups', video_url: 'https://youtube.com/shorts/ZG1MwCv7eKo', category: 'Push Ups' },
  { id: 'new4', name: 'video feedback andrew', video_url: 'https://youtube.com/shorts/SR1qMypWs2k', category: 'ABS' },
  { id: 'new5', name: 'November 25, 2025', video_url: 'https://youtube.com/shorts/J-nLNQSRIMU', category: 'ABS' },
  { id: 'new6', name: 'HANDSTAND PROGRESSION', video_url: 'https://youtube.com/shorts/Xh1muXzGN4A', category: 'Push Ups' },
  { id: 'new7', name: 'HANDSTAND FEEDBACK', video_url: 'https://youtube.com/shorts/M_EPDHPBp18', category: 'ABS' },
  { id: 'new8', name: 'BACKROLL ELBOWS', video_url: 'https://youtube.com/shorts/hiUk1AXtl_M', category: 'ABS' },
  { id: 'new9', name: 'andrew reeview', video_url: 'https://youtu.be/05E9ep4zfCc', category: 'ABS' },
  { id: 'new10', name: 'gumbi', video_url: 'https://youtube.com/shorts/rHVZokFGbNI', category: 'Squats' },
  { id: 'new11', name: 'front roundoff', video_url: 'https://youtube.com/shorts/jgkU0EYzMXc', category: 'ABS' },
  { id: 'new12', name: 'Back roll side', video_url: 'https://youtube.com/shorts/9JDtUH5aQfQ', category: 'ABS' },
  { id: 'new13', name: 'cart well bent', video_url: 'https://youtube.com/shorts/eDhc0EOJVyM', category: 'Push Ups' },
  { id: 'new14', name: 'flow variations', video_url: 'https://youtube.com/shorts/zmv-vwdds9o', category: 'ABS' },
  { id: 'new15', name: 'feedack andrew dec 4th', video_url: 'https://youtu.be/4fdc683XnAA', category: 'ABS' }
];

// 5-Day Training Program with all exercises
const HARDCODED_PROGRAM = {
  program: {
    id: 'prog1',
    name: '5 Day Training Program'
  },
  weeks: [
    {
      id: 'week1',
      week_number: 1,
      focus_theme: 'Foundation Week',
      days: [
        // Day 1 (2 sets × 10 reps each)
        {
          id: 'day1',
          day_number: 1,
          day_type: 'training',
          exercises: [
            { exercise_id: 'ex34', exercise_name: 'Open legs leg raises', exercise_video_url: 'https://youtube.com/shorts/sm3kUwH6PHo', sets: 2, reps: 10, notes: '', order_index: 0 },
            { exercise_id: 'ex39', exercise_name: 'Sissy squat progression', exercise_video_url: 'https://youtube.com/shorts/cBuk2reOxVk', sets: 2, reps: 10, notes: '', order_index: 1 },
            { exercise_id: 'ex28', exercise_name: 'Elevated pistol squat', exercise_video_url: 'https://youtube.com/shorts/tr55LS8gytc', sets: 2, reps: 10, notes: 'Grab onto something', order_index: 2 },
            { exercise_id: 'ex2', exercise_name: 'Back plank dynamic taps', exercise_video_url: 'https://youtube.com/shorts/2Huc1GXkEvU', sets: 2, reps: 10, notes: '', order_index: 3 },
            { exercise_id: 'ex23', exercise_name: 'Deep squat jumps', exercise_video_url: 'https://youtube.com/shorts/LYFCxCNZBs0', sets: 2, reps: 10, notes: '', order_index: 4 },
            { exercise_id: 'ex40', exercise_name: 'Sitting L sit', exercise_video_url: 'https://youtube.com/shorts/UJ3FisSDNRk', sets: 2, reps: 10, notes: '', order_index: 5 },
            { exercise_id: 'ex41', exercise_name: 'Sitting leg raises', exercise_video_url: 'https://youtube.com/shorts/yQdyVZG_ZMs', sets: 2, reps: 10, notes: '', order_index: 6 },
            { exercise_id: 'ex21', exercise_name: 'Wall L Sit', exercise_video_url: 'https://youtube.com/shorts/Clqo7-VifMg', sets: 2, reps: 10, notes: '', order_index: 7 }
          ]
        },
        // Day 2 (3 sets × 10 reps each)
        {
          id: 'day2',
          day_number: 2,
          day_type: 'training',
          exercises: [
            { exercise_id: 'ex35', exercise_name: 'Plank to tuck', exercise_video_url: 'https://youtube.com/shorts/2Qpe-jOGwN4', sets: 3, reps: 10, notes: '', order_index: 0 },
            { exercise_id: 'ex22', exercise_name: 'Cartwheel direction', exercise_video_url: 'https://youtube.com/shorts/WWGREv6IG1E', sets: 3, reps: 10, notes: '', order_index: 1 },
            { exercise_id: 'ex46', exercise_name: 'Wall cartwheel', exercise_video_url: 'https://youtube.com/shorts/Wie0c1Uwc5g', sets: 3, reps: 10, notes: '', order_index: 2 },
            { exercise_id: 'ex33', exercise_name: 'One leg stand up from plank', exercise_video_url: 'https://youtube.com/shorts/CrPCBUSxklI', sets: 3, reps: 10, notes: '', order_index: 3 },
            { exercise_id: 'ex16', exercise_name: 'Plank Drags', exercise_video_url: 'https://youtube.com/shorts/B7Arp3ToW5w', sets: 3, reps: 10, notes: '', order_index: 4 },
            { exercise_id: 'ex15', exercise_name: 'Pike Push ups', exercise_video_url: 'https://youtube.com/shorts/lP1eUcFNJuE', sets: 3, reps: 10, notes: '', order_index: 5 }
          ]
        },
        // Day 3 (2 sets × 10 reps each)
        {
          id: 'day3',
          day_number: 3,
          day_type: 'training',
          exercises: [
            { exercise_id: 'ex32', exercise_name: 'How to front roll', exercise_video_url: 'https://youtube.com/shorts/3erKQ9DCFpU', sets: 2, reps: 10, notes: '', order_index: 0 },
            { exercise_id: 'ex25', exercise_name: 'Dynamic bridge hold', exercise_video_url: 'https://youtube.com/shorts/xmyL8bbaPo8', sets: 2, reps: 10, notes: '', order_index: 1 },
            { exercise_id: 'ex45', exercise_name: 'Wall back walk', exercise_video_url: 'https://youtube.com/shorts/1n7-92R_RnI', sets: 2, reps: 10, notes: '', order_index: 2 },
            { exercise_id: 'ex2', exercise_name: 'Back plank dynamic taps', exercise_video_url: 'https://youtube.com/shorts/2Huc1GXkEvU', sets: 2, reps: 10, notes: '', order_index: 3 },
            { exercise_id: 'ex3', exercise_name: 'Back roll stand up', exercise_video_url: 'https://youtube.com/shorts/pb87bddJzNA', sets: 2, reps: 10, notes: '', order_index: 4 },
            { exercise_id: 'ex11', exercise_name: 'Headstand Tucks', exercise_video_url: 'https://youtube.com/shorts/gJq8CZDtWP4', sets: 2, reps: 10, notes: '', order_index: 5 },
            { exercise_id: 'ex14', exercise_name: 'One leg wall handstand', exercise_video_url: 'https://youtube.com/shorts/v0PJfurfhaw', sets: 2, reps: 10, notes: '', order_index: 6 },
            { exercise_id: 'ex17', exercise_name: 'Reverse plank bounces', exercise_video_url: 'https://youtube.com/shorts/HDHKZt4HHsY', sets: 2, reps: 10, notes: '', order_index: 7 },
            { exercise_id: 'ex18', exercise_name: 'Reversed plank hips', exercise_video_url: 'https://youtube.com/shorts/zHSCAQM4PqE', sets: 2, reps: 10, notes: '', order_index: 8 }
          ]
        },
        // Day 4 (2 sets × 10 reps each)
        {
          id: 'day4',
          day_number: 4,
          day_type: 'training',
          exercises: [
            { exercise_id: 'ex20', exercise_name: 'Wall Ankle flex', exercise_video_url: 'https://youtube.com/shorts/MJ-1vzcpBGM', sets: 2, reps: 10, notes: '', order_index: 0 },
            { exercise_id: 'ex38', exercise_name: 'Shrimp squat', exercise_video_url: 'https://youtube.com/shorts/UoCU1XKY_AM', sets: 2, reps: 10, notes: '', order_index: 1 },
            { exercise_id: 'ex24', exercise_name: 'Deep squat knee taps', exercise_video_url: 'https://youtube.com/shorts/a-hg6h9Q_Vk', sets: 2, reps: 10, notes: 'Heels on the ground', order_index: 2 },
            { exercise_id: 'ex42', exercise_name: 'Squat x knee tap', exercise_video_url: 'https://youtube.com/shorts/4TnP9dzQH3U', sets: 2, reps: 10, notes: '', order_index: 3 },
            { exercise_id: 'ex26', exercise_name: 'Dynamic squat circle', exercise_video_url: 'https://youtube.com/shorts/V523wrw7Bng', sets: 2, reps: 10, notes: '', order_index: 4 },
            { exercise_id: 'ex6', exercise_name: 'Flow #1', exercise_video_url: 'https://youtube.com/shorts/83Eg3cpjHOI', sets: 2, reps: 10, notes: '', order_index: 5 }
          ]
        },
        // Day 5 (3 sets × 10 reps each)
        {
          id: 'day5',
          day_number: 5,
          day_type: 'training',
          exercises: [
            { exercise_id: 'ex5', exercise_name: 'Elevated pike push ups', exercise_video_url: 'https://youtube.com/shorts/eKm4d-QoR_k', sets: 3, reps: 10, notes: '', order_index: 0 },
            { exercise_id: 'ex30', exercise_name: 'Headstand push up', exercise_video_url: 'https://youtube.com/shorts/xB2X2EA1iKE', sets: 3, reps: 10, notes: '', order_index: 1 },
            { exercise_id: 'ex10', exercise_name: 'Headstand Leg Raises', exercise_video_url: 'https://youtube.com/shorts/Xy7xUJFxt-o', sets: 3, reps: 10, notes: '', order_index: 2 },
            { exercise_id: 'ex27', exercise_name: 'Dynamic squat stretch', exercise_video_url: 'https://youtube.com/shorts/JkEN7dq7hFE', sets: 3, reps: 10, notes: '', order_index: 3 },
            { exercise_id: 'ex1', exercise_name: 'B Kick Progression', exercise_video_url: 'https://youtube.com/shorts/Rp74AUkzBJg', sets: 3, reps: 10, notes: '', order_index: 4 },
            { exercise_id: 'ex44', exercise_name: 'Tuck hold', exercise_video_url: 'https://youtube.com/shorts/uUTZhn7EUwQ', sets: 3, reps: 10, notes: '', order_index: 5 },
            { exercise_id: 'ex37', exercise_name: 'Reverse plank switch', exercise_video_url: 'https://youtube.com/shorts/7OCXKubUueU', sets: 3, reps: 10, notes: '', order_index: 6 },
            { exercise_id: 'ex13', exercise_name: 'Macaco', exercise_video_url: 'https://youtube.com/shorts/7mTLtN5Nn6E', sets: 3, reps: 10, notes: '', order_index: 7 }
          ]
        }
      ]
    }
  ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
  currentView: 'my-program',
  exercises: [],
  conditioningExercises: [],
  programs: [],
  currentProgram: null,
  selectedVideo: null,
  playbackSpeed: 1,
  completedDays: new Set(),
  exerciseFilter: 'All',
  conditioningFilter: 'All',
  privateLibrary: [] // User's private library of saved exercises
};

// ============================================
// PRIVATE LIBRARY FUNCTIONS
// ============================================

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
  // Check if already exists
  const exists = state.privateLibrary.some(ex => ex.id === exercise.id && ex.video_url === exercise.video_url);
  if (!exists) {
    state.privateLibrary.push(exercise);
    savePrivateLibrary();
    showToast('Added to Private Library! 🌟', 'success');
  } else {
    showToast('Already in your Private Library', 'info');
  }
}

function removeFromPrivateLibrary(exerciseId, videoUrl) {
  state.privateLibrary = state.privateLibrary.filter(ex => !(ex.id === exerciseId && ex.video_url === videoUrl));
  savePrivateLibrary();
  showToast('Removed from Private Library', 'info');
  render();
}

function clearPrivateLibrary() {
  if (confirm('Are you sure you want to clear your entire Private Library?')) {
    state.privateLibrary = [];
    savePrivateLibrary();
    showToast('Private Library cleared', 'info');
    render();
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getYouTubeVideoId(url) {
  if (!url) return null;
  const patterns = [
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /youtu\.be\/([a-zA-Z0-9_-]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return match[1];
  }
  return null;
}

function getYouTubeThumbnail(url) {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function getYouTubeEmbedUrl(url) {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return url;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&rel=0&enablejsapi=1`;
}

// ============================================
// DATA LOADING (Hardcoded - No API Calls)
// ============================================

function loadExercises() {
  state.exercises = HARDCODED_EXERCISES;
  console.log('✅ Loaded', state.exercises.length, 'exercises');
}

function loadConditioningExercises() {
  state.conditioningExercises = HARDCODED_CONDITIONING;
  console.log('✅ Loaded', state.conditioningExercises.length, 'conditioning exercises');
}

function loadPrograms() {
  state.programs = [HARDCODED_PROGRAM.program];
  state.currentProgram = HARDCODED_PROGRAM;
  console.log('✅ Loaded 5-Day Training Program');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg text-white z-50 ${
    type === 'success' ? 'bg-green-600' :
    type === 'error' ? 'bg-red-600' :
    'bg-orange'
  }`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ============================================
// NAVIGATION
// ============================================

function navigate(view) {
  state.currentView = view;
  render();
}

// ============================================
// VIDEO PLAYER
// ============================================

function openVideoPlayer(videoUrl) {
  state.selectedVideo = videoUrl;
  state.playbackSpeed = 1;
  renderVideoModal();
}

function closeVideoPlayer() {
  state.selectedVideo = null;
  renderVideoModal();
}

function changePlaybackSpeed(speed) {
  state.playbackSpeed = speed;
  const iframe = document.getElementById('video-iframe');
  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'setPlaybackRate',
      args: [speed]
    }), '*');
  }
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderNavigation() {
  const views = [
    { id: 'my-program', label: 'My Program', icon: 'fa-calendar-check' },
    { id: 'exercises', label: 'Exercises', icon: 'fa-dumbbell' },
    { id: 'conditioning', label: 'Conditioning Library', icon: 'fa-fire' },
    { id: 'private-library', label: 'Private Library', icon: 'fa-heart', badge: state.privateLibrary.length },
    { id: 'admin', label: 'Admin', icon: 'fa-cog' }
  ];

  return `
    <nav class="bg-dark-card border-b border-dark sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center gap-8 h-16">
          <h1 class="text-xl font-bold text-white mr-auto flex items-center gap-2">
            <i class="fas fa-fire orange-accent"></i> 
            <span>ACRO ZENITH</span>
          </h1>
          ${views.map(view => `
            <button 
              onclick="navigate('${view.id}')" 
              class="text-sm font-medium transition-colors uppercase tracking-wide relative ${
                state.currentView === view.id 
                  ? 'orange-accent border-b-2 border-orange pb-[22px] pt-[24px]' 
                  : 'text-muted hover-orange'
              }"
            >
              <i class="fas ${view.icon} mr-2"></i>${view.label}
              ${view.badge > 0 ? `<span class="absolute -top-1 -right-2 bg-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">${view.badge}</span>` : ''}
            </button>
          `).join('')}
        </div>
      </div>
    </nav>
  `;
}

function renderMyProgram() {
  if (!state.currentProgram) {
    return `
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="text-center">
          <i class="fas fa-dumbbell text-6xl mb-4 text-muted"></i>
          <h2 class="text-2xl font-bold mb-2">No Program Available</h2>
          <p class="text-muted">Your coach will create a program for you soon</p>
        </div>
      </div>
    `;
  }

  const allDays = [];
  let dayCounter = 1;

  state.currentProgram.weeks.forEach(week => {
    week.days.forEach(day => {
      allDays.push({
        ...day,
        dayNumber: dayCounter,
        weekNumber: week.week_number,
        weekFocus: week.focus_theme
      });
      dayCounter++;
    });
  });

  return `
    <div class="space-y-6">
      <div class="bg-dark-card rounded-xl p-8 border border-dark">
        <h1 class="text-4xl font-bold text-white mb-2">${state.currentProgram.program.name}</h1>
        <p class="text-muted text-lg">${allDays.length} training days</p>
      </div>

      <div class="space-y-4">
        ${allDays.map(day => {
          const isCompleted = state.completedDays.has(day.dayNumber);
          const setsReps = day.exercises.length > 0 ? `${day.exercises[0].sets} sets × ${day.exercises[0].reps} reps each` : '';
          
          return `
            <div class="bg-dark-card rounded-xl p-6 border ${isCompleted ? 'border-orange' : 'border-dark'} card-hover">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4">
                  <h2 class="text-2xl font-bold text-white">Day ${day.dayNumber}</h2>
                  <span class="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${
                    day.day_type === 'training' 
                      ? 'bg-orange text-white' 
                      : 'bg-gray-800 text-gray-400'
                  }">
                    ${day.day_type === 'training' ? 'Training' : 'Rest'}
                  </span>
                  ${setsReps ? `<span class="text-muted text-sm">• ${setsReps}</span>` : ''}
                </div>
                <button 
                  onclick="toggleDayStatus(${day.dayNumber})"
                  class="text-3xl ${isCompleted ? 'orange-accent' : 'text-gray-700'} hover:scale-110 transition-transform"
                >
                  <i class="fas fa-check-circle"></i>
                </button>
              </div>

              ${day.day_type === 'training' && day.exercises.length > 0 ? `
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  ${day.exercises.map(ex => `
                    <div 
                      onclick="openVideoPlayer('${ex.exercise_video_url}')"
                      class="video-card group relative bg-black rounded-lg overflow-hidden cursor-pointer border border-dark hover:border-orange transition-all"
                    >
                      ${ex.exercise_video_url ? `
                        <div class="youtube-shorts relative">
                          <img
                            src="${getYouTubeThumbnail(ex.exercise_video_url)}"
                            alt="${ex.exercise_name}"
                            class="w-full h-full object-cover"
                            onerror="this.src='https://via.placeholder.com/360x640?text=Video&bg=111111&fg=666666'"
                          />
                          <div class="video-overlay">
                            <div class="bg-orange rounded-full p-4">
                              <i class="fas fa-play text-white text-2xl"></i>
                            </div>
                          </div>
                        </div>
                      ` : `
                        <div class="youtube-shorts flex items-center justify-center bg-gray-900">
                          <i class="fas fa-dumbbell text-4xl text-gray-700"></i>
                        </div>
                      `}
                      
                      <div class="p-3 space-y-1 bg-dark-card">
                        <p class="font-semibold text-xs text-white line-clamp-2 leading-tight">
                          ${ex.exercise_name}
                        </p>
                        ${ex.notes ? `
                          <p class="text-xs text-muted line-clamp-1">
                            ${ex.notes}
                          </p>
                        ` : ''}
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : `
                <div class="text-center py-8 text-muted">
                  <i class="fas fa-bed text-3xl mb-2"></i>
                  <p>Rest and recovery day</p>
                </div>
              `}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderExercises() {
  if (state.exercises.length === 0) {
    return `
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="text-center">
          <i class="fas fa-list text-6xl mb-4 text-muted"></i>
          <h2 class="text-2xl font-bold mb-2">No Exercises Available</h2>
          <p class="text-muted">Exercises will appear here</p>
        </div>
      </div>
    `;
  }

  // Add "Most Recent" as first filter option
  const allCategories = ['Most Recent', 'All', ...new Set(state.exercises.map(ex => ex.category || 'Uncategorized').sort())];
  
  // Filter exercises based on selected filter
  let filteredExercises;
  if (state.exerciseFilter === 'Most Recent') {
    filteredExercises = state.exercises.filter(ex => ex.is_new === true);
  } else if (state.exerciseFilter === 'All') {
    filteredExercises = state.exercises;
  } else {
    filteredExercises = state.exercises.filter(ex => (ex.category || 'Uncategorized') === state.exerciseFilter);
  }

  return `
    <div class="space-y-6">
      <div class="bg-dark-card rounded-xl p-8 border border-dark">
        <h1 class="text-4xl font-bold text-white mb-4">Exercise Library</h1>
        <p class="text-muted text-lg mb-6">${filteredExercises.length} of ${state.exercises.length} exercises</p>
        
        <div class="flex flex-wrap gap-2">
          ${allCategories.map(cat => `
            <button 
              onclick="setExerciseFilter('${cat}')"
              class="px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wide transition-all ${
                state.exerciseFilter === cat
                  ? 'bg-orange text-white'
                  : 'bg-black text-muted border border-dark hover:border-orange'
              }"
            >
              ${cat === 'Most Recent' ? '<i class="fas fa-star mr-1"></i>' : ''}${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        ${filteredExercises.map(ex => `
          <div class="video-card group relative bg-dark-card rounded-lg overflow-hidden border border-dark hover:border-orange transition-all card-hover ${ex.is_horizontal ? 'col-span-2' : ''}">
            <div onclick="openVideoPlayer('${ex.video_url}')" class="cursor-pointer">
              ${ex.video_url ? `
                <div class="${ex.is_horizontal ? 'youtube-horizontal' : 'youtube-shorts'} relative">
                  <img
                    src="${getYouTubeThumbnail(ex.video_url)}"
                    alt="${ex.name}"
                    class="w-full h-full object-cover"
                    onerror="this.src='https://via.placeholder.com/${ex.is_horizontal ? '640x360' : '360x640'}?text=Video&bg=111111&fg=666666'"
                  />
                  <div class="video-overlay">
                    <div class="bg-orange rounded-full p-4">
                      <i class="fas fa-play text-white text-2xl"></i>
                    </div>
                  </div>
                  ${ex.is_new ? `
                    <div class="absolute top-2 right-2 bg-orange text-white text-xs font-bold px-2 py-1 rounded uppercase">
                      NEW
                    </div>
                  ` : ''}
                </div>
              ` : `
                <div class="${ex.is_horizontal ? 'youtube-horizontal' : 'youtube-shorts'} flex items-center justify-center bg-gray-900">
                  <i class="fas fa-dumbbell text-4xl text-gray-700"></i>
                </div>
              `}
            </div>
            
            <div class="p-3 space-y-2">
              <p class="font-semibold text-xs text-white line-clamp-2 leading-tight">
                ${ex.name}
              </p>
              <div class="flex items-center gap-1 flex-wrap">
                ${ex.difficulty ? `
                  <span class="inline-block px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide ${
                    ex.difficulty === 'Beginner' ? 'bg-green-900 text-green-400 border border-green-700' :
                    ex.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-400 border border-yellow-700' :
                    'bg-red-900 text-red-400 border border-red-700'
                  }">
                    ${ex.difficulty}
                  </span>
                ` : ''}
                ${ex.category ? `
                  <span class="inline-block px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide bg-gray-900 text-gray-400 border border-gray-700">
                    ${ex.category}
                  </span>
                ` : ''}
              </div>
              <button
                onclick="event.stopPropagation(); addToPrivateLibrary(${JSON.stringify(ex).replace(/"/g, '&quot;')})"
                class="w-full px-3 py-1.5 bg-black hover:bg-orange text-white text-xs font-medium rounded border border-dark hover:border-orange transition-colors uppercase tracking-wide"
              >
                <i class="fas fa-heart mr-1"></i>Add to Private Library
              </button>
            </div>
          </div>
        `).join('')}
      </div>
      
      ${filteredExercises.length === 0 ? `
        <div class="text-center py-12">
          <i class="fas fa-filter text-4xl text-muted mb-4"></i>
          <p class="text-muted">No exercises found in this category</p>
        </div>
      ` : ''}
    </div>
  `;
}

function setExerciseFilter(category) {
  state.exerciseFilter = category;
  render();
}

function setConditioningFilter(category) {
  state.conditioningFilter = category;
  render();
}

function renderConditioning() {
  if (state.conditioningExercises.length === 0) {
    return `
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="text-center">
          <i class="fas fa-fire text-6xl mb-4 text-muted"></i>
          <h2 class="text-2xl font-bold mb-2">No Conditioning Exercises Available</h2>
          <p class="text-muted">Conditioning exercises will appear here</p>
        </div>
      </div>
    `;
  }

  const allCategories = ['All', ...new Set(state.conditioningExercises.map(ex => ex.category).sort())];
  const filteredExercises = state.conditioningFilter === 'All' 
    ? state.conditioningExercises 
    : state.conditioningExercises.filter(ex => ex.category === state.conditioningFilter);

  return `
    <div class="space-y-6">
      <div class="bg-dark-card rounded-xl p-8 border border-dark">
        <h1 class="text-4xl font-bold text-white mb-4">Conditioning Library</h1>
        <p class="text-muted text-lg mb-6">${filteredExercises.length} of ${state.conditioningExercises.length} exercises</p>
        
        <div class="flex flex-wrap gap-2">
          ${allCategories.map(cat => `
            <button 
              onclick="setConditioningFilter('${cat}')"
              class="px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wide transition-all ${
                state.conditioningFilter === cat
                  ? 'bg-orange text-white'
                  : 'bg-black text-muted border border-dark hover:border-orange'
              }"
            >
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        ${filteredExercises.map(ex => `
          <div class="video-card group relative bg-dark-card rounded-lg overflow-hidden border border-dark hover:border-orange transition-all card-hover">
            <div onclick="openVideoPlayer('${ex.video_url}')" class="cursor-pointer">
              ${ex.video_url ? `
                <div class="youtube-shorts relative">
                  <img
                    src="${getYouTubeThumbnail(ex.video_url)}"
                    alt="${ex.name}"
                    class="w-full h-full object-cover"
                    onerror="this.src='https://via.placeholder.com/360x640?text=Video&bg=111111&fg=666666'"
                  />
                  <div class="video-overlay">
                    <div class="bg-orange rounded-full p-4">
                      <i class="fas fa-play text-white text-2xl"></i>
                    </div>
                  </div>
                </div>
              ` : `
                <div class="youtube-shorts flex items-center justify-center bg-gray-900">
                  <i class="fas fa-dumbbell text-4xl text-gray-700"></i>
                </div>
              `}
            </div>
            
            <div class="p-3 space-y-2">
              <p class="font-semibold text-xs text-white line-clamp-2 leading-tight">
                ${ex.name}
              </p>
              ${ex.category ? `
                <span class="inline-block px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide ${
                  ex.category === 'ABS' ? 'bg-blue-900 text-blue-400 border border-blue-700' :
                  ex.category === 'Push Ups' ? 'bg-purple-900 text-purple-400 border border-purple-700' :
                  'bg-green-900 text-green-400 border border-green-700'
                }">
                  ${ex.category}
                </span>
              ` : ''}
              <button
                onclick="event.stopPropagation(); addToPrivateLibrary(${JSON.stringify(ex).replace(/"/g, '&quot;')})"
                class="w-full px-3 py-1.5 bg-black hover:bg-orange text-white text-xs font-medium rounded border border-dark hover:border-orange transition-colors uppercase tracking-wide mt-2"
              >
                <i class="fas fa-heart mr-1"></i>Add to Private Library
              </button>
            </div>
          </div>
        `).join('')}
      </div>
      
      ${filteredExercises.length === 0 ? `
        <div class="text-center py-12">
          <i class="fas fa-filter text-4xl text-muted mb-4"></i>
          <p class="text-muted">No conditioning exercises found in this category</p>
        </div>
      ` : ''}
    </div>
  `;
}

function renderAdmin() {
  return `
    <div class="space-y-6">
      <div class="bg-dark-card rounded-xl p-8 border border-dark">
        <h1 class="text-4xl font-bold text-white mb-2">Admin Panel</h1>
        <p class="text-muted">View statistics (Admin features disabled in hardcoded version)</p>
      </div>

      <div class="bg-dark-card rounded-xl p-6 border border-dark">
        <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span class="orange-accent">//</span> Statistics
        </h2>
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-black rounded-lg p-6 border border-dark text-center">
            <div class="text-4xl font-bold orange-accent mb-2">${state.exercises.length}</div>
            <div class="text-muted text-sm uppercase tracking-wide">Exercises</div>
          </div>
          <div class="bg-black rounded-lg p-6 border border-dark text-center">
            <div class="text-4xl font-bold orange-accent mb-2">${state.conditioningExercises.length}</div>
            <div class="text-muted text-sm uppercase tracking-wide">Conditioning</div>
          </div>
          <div class="bg-black rounded-lg p-6 border border-dark text-center">
            <div class="text-4xl font-bold orange-accent mb-2">${state.completedDays.size}</div>
            <div class="text-muted text-sm uppercase tracking-wide">Completed Days</div>
          </div>
        </div>
      </div>

      <div class="bg-yellow-900/20 border border-yellow-600 rounded-xl p-6">
        <div class="flex items-start gap-3">
          <i class="fas fa-info-circle text-yellow-400 text-xl mt-1"></i>
          <div>
            <h3 class="text-yellow-400 font-bold mb-2">Hardcoded Data Version</h3>
            <p class="text-gray-300 text-sm">
              This version runs without a database. All exercises and programs are hardcoded in the frontend.
              Admin features (adding exercises, creating programs) are disabled.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderVideoModal() {
  if (!state.selectedVideo) {
    const modal = document.getElementById('video-modal');
    if (modal) modal.remove();
    return;
  }

  const existingModal = document.getElementById('video-modal');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.id = 'video-modal';
  modal.className = 'fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4';
  modal.onclick = (e) => {
    if (e.target === modal) closeVideoPlayer();
  };

  modal.innerHTML = `
    <div class="bg-dark-card rounded-xl p-6 max-w-md w-full border border-dark">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold text-white uppercase tracking-wide">Video Player</h3>
        <button onclick="closeVideoPlayer()" class="text-muted hover-orange transition-colors">
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>
      
      <div class="youtube-shorts w-full bg-black rounded-lg overflow-hidden mb-4 border border-dark">
        <iframe
          id="video-iframe"
          src="${getYouTubeEmbedUrl(state.selectedVideo)}"
          class="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="space-y-3">
        <div class="text-sm font-medium text-white uppercase tracking-wide">Playback Speed</div>
        <div class="grid grid-cols-4 gap-2">
          ${[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(speed => `
            <button
              onclick="changePlaybackSpeed(${speed})"
              class="px-3 py-2 rounded ${
                state.playbackSpeed === speed
                  ? 'bg-orange text-white border-2 border-orange'
                  : 'bg-black text-muted border border-dark hover:border-orange'
              } text-sm font-bold transition-colors"
            >
              ${speed}x
            </button>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function renderPrivateLibrary() {
  if (state.privateLibrary.length === 0) {
    return `
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="text-center">
          <i class="fas fa-heart text-6xl mb-4 text-muted"></i>
          <h2 class="text-2xl font-bold mb-2">Your Private Library is Empty</h2>
          <p class="text-muted mb-6">Add exercises from Exercise Library or Conditioning Library</p>
          <div class="flex gap-4 justify-center">
            <button onclick="navigate('exercises')" class="px-6 py-3 bg-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-colors uppercase tracking-wide">
              <i class="fas fa-dumbbell mr-2"></i>Browse Exercises
            </button>
            <button onclick="navigate('conditioning')" class="px-6 py-3 bg-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-colors uppercase tracking-wide">
              <i class="fas fa-fire mr-2"></i>Browse Conditioning
            </button>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="space-y-6">
      <div class="bg-dark-card rounded-xl p-8 border border-dark">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h1 class="text-4xl font-bold text-white mb-2">
              <i class="fas fa-heart orange-accent mr-3"></i>Private Library
            </h1>
            <p class="text-muted text-lg">${state.privateLibrary.length} saved exercises</p>
          </div>
          <button
            onclick="clearPrivateLibrary()"
            class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors uppercase tracking-wide"
          >
            <i class="fas fa-trash mr-2"></i>Clear All
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        ${state.privateLibrary.map(ex => `
          <div class="video-card group relative bg-dark-card rounded-lg overflow-hidden border border-dark hover:border-orange transition-all card-hover ${ex.is_horizontal ? 'col-span-2' : ''}">
            <div onclick="openVideoPlayer('${ex.video_url}')" class="cursor-pointer">
              ${ex.video_url ? `
                <div class="${ex.is_horizontal ? 'youtube-horizontal' : 'youtube-shorts'} relative">
                  <img
                    src="${getYouTubeThumbnail(ex.video_url)}"
                    alt="${ex.name}"
                    class="w-full h-full object-cover"
                    onerror="this.src='https://via.placeholder.com/${ex.is_horizontal ? '640x360' : '360x640'}?text=Video&bg=111111&fg=666666'"
                  />
                  <div class="video-overlay">
                    <div class="bg-orange rounded-full p-4">
                      <i class="fas fa-play text-white text-2xl"></i>
                    </div>
                  </div>
                </div>
              ` : `
                <div class="${ex.is_horizontal ? 'youtube-horizontal' : 'youtube-shorts'} flex items-center justify-center bg-gray-900">
                  <i class="fas fa-dumbbell text-4xl text-gray-700"></i>
                </div>
              `}
            </div>
            
            <div class="p-3 space-y-2">
              <p class="font-semibold text-xs text-white line-clamp-2 leading-tight">
                ${ex.name}
              </p>
              <div class="flex items-center gap-1 flex-wrap">
                ${ex.difficulty ? `
                  <span class="inline-block px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide ${
                    ex.difficulty === 'Beginner' ? 'bg-green-900 text-green-400 border border-green-700' :
                    ex.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-400 border border-yellow-700' :
                    'bg-red-900 text-red-400 border border-red-700'
                  }">
                    ${ex.difficulty}
                  </span>
                ` : ''}
                ${ex.category ? `
                  <span class="inline-block px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide ${
                    ex.category === 'ABS' ? 'bg-blue-900 text-blue-400 border border-blue-700' :
                    ex.category === 'Push Ups' ? 'bg-purple-900 text-purple-400 border border-purple-700' :
                    ex.category === 'Squats' ? 'bg-green-900 text-green-400 border border-green-700' :
                    'bg-gray-900 text-gray-400 border border-gray-700'
                  }">
                    ${ex.category}
                  </span>
                ` : ''}
              </div>
              <button
                onclick="event.stopPropagation(); removeFromPrivateLibrary('${ex.id}', '${ex.video_url}')"
                class="w-full px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded transition-colors uppercase tracking-wide"
              >
                <i class="fas fa-times mr-1"></i>Remove
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function render() {
  const app = document.getElementById('app');
  
  let content = '';
  switch (state.currentView) {
    case 'my-program':
      content = renderMyProgram();
      break;
    case 'exercises':
      content = renderExercises();
      break;
    case 'conditioning':
      content = renderConditioning();
      break;
    case 'private-library':
      content = renderPrivateLibrary();
      break;
    case 'admin':
      content = renderAdmin();
      break;
  }

  app.innerHTML = `
    ${renderNavigation()}
    <div class="max-w-7xl mx-auto px-6 py-8">
      ${content}
    </div>
  `;
}

// ============================================
// EVENT HANDLERS
// ============================================

function toggleDayStatus(dayNumber) {
  if (state.completedDays.has(dayNumber)) {
    state.completedDays.delete(dayNumber);
    showToast('Day marked as incomplete', 'info');
  } else {
    state.completedDays.add(dayNumber);
    showToast('Day marked as complete! 🔥', 'success');
  }
  render();
}

// ============================================
// INITIALIZE APP
// ============================================

function init() {
  console.log('🚀 Initializing Acro Zenith (Hardcoded Version)...');
  
  // Load all hardcoded data
  loadExercises();
  loadConditioningExercises();
  loadPrograms();
  loadPrivateLibrary();
  
  // Render initial view
  render();
  
  console.log('✅ App initialized successfully!');
  console.log('📊 Total exercises:', state.exercises.length);
  console.log('💪 Total conditioning:', state.conditioningExercises.length);
  console.log('📅 Program days:', state.currentProgram.weeks[0].days.length);
  console.log('❤️ Private library:', state.privateLibrary.length);
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
