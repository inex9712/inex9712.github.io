const translations = {
  ko: {
    nav_about: "소개",
    nav_projects: "프로젝트",
    nav_contact: "연락처",
    hero_title: "게임 개발자",
    hero_desc: "창의적인 플레이 경험을 만드는 개발자",
    hero_btn: "프로젝트 보기",
    about_title: "About Me",
    about_desc: "Unity 기반 게임 개발자입니다. 3D 액션 게임 제작 경험이 있습니다.",
    projects_title: "Projects",
    contact_title: "Contact",
    // ── proj1: AI File Organizer
    proj1_title: "AI Smart File Organizer",
    proj1_short: "AI가 파일을 자동으로 분류하고 정리하는 Python 툴",
    proj1_more: "자세히 보기 →",
    modal_overview_title: "프로젝트 개요",
    modal_overview_desc: "파일명과 확장자만으로 Gemini 2.5 Flash 모델이 카테고리를 추론하고, 생성 연도/카테고리 2뎁스 구조로 디렉토리를 자동 생성해 파일을 분류하는 Python 자동화 툴입니다.",
    modal_features_title: "핵심 기능",
    modal_feat1: "🤖 AI 메타데이터 추론 — Gemini API로 파일 카테고리 자동 판별",
    modal_feat2: "📁 동적 디렉토리 생성 — 연도 / 카테고리 2뎁스 자동 구조화",
    modal_feat3: "🌐 다국어 파일명 지원 — UTF-8 강제 적용으로 한/일 파일명 처리",
    modal_feat4: "🛡️ 자가 참조 버그 방지 — 실행 스크립트 자신을 이동 대상에서 제외",
    modal_trouble_title: "트러블슈팅",
    modal_trouble_desc: "Python 3.14 환경에서 다국어 파일명 처리 시 ASCII Codec 에러 발생 → sys.stdout.reconfigure + 터미널 -X utf8 플래그 조합으로 딥 레벨 해결.",
    modal_code_title: "소스 코드",
    // ── proj2: THE ARXHERS
    proj2_title: "THE ARXHERS",
    proj2_short: "활을 주력 무기로 한 1vs1 온라인 FPS 게임",
    proj2_more: "자세히 보기 →",
    proj2_screenshot: "📸 스크린샷 준비 중",
    proj2_story_title: "만들게 된 계기",
    proj2_story_desc: "FPS 장르는 총이 주력 무기인 게임이 대부분입니다. 하지만 냉병기 시대에도 활은 가장 보편적인 원거리 무기였습니다. \"총이 없어도 FPS가 될 수 있지 않을까?\" 라는 아이디어에서 출발해, 활의 차징과 포물선이라는 물리적 특성을 FPS에 접목한 1vs1 대전 게임을 개발하게 되었습니다.",
    proj2_features_title: "게임 설명 & 핵심 기능",
    proj2_feat1: "🏹 차징 발사 시스템 — 마우스를 누르는 시간에 따라 화살 속도 변화 (Lerp 적용)",
    proj2_feat2: "🌀 포물선 물리 — Rigidbody + 중력으로 자연스러운 화살 궤적 구현",
    proj2_feat3: "🎯 부위별 데미지 배율 — 머리 175% / 몸통 100% / 팔다리 60%",
    proj2_feat4: "🌐 온라인 매칭 — Unity Lobby + Relay로 NAT 없이 P2P 매칭",
    proj2_feat5: "💊 힐 아이템 — 15초 쿨타임으로 리스폰되는 회복 아이템",
    proj2_algo_title: "핵심 알고리즘",
    proj2_algo1: "⚡ 차징 보간 — Mathf.Lerp(minSpeed, maxSpeed, chargeRatio)로 최소~최대 속도를 부드럽게 연결",
    proj2_algo2: "🔄 네트워크 동기화 — 20Hz로 위치/회전 전송 후 Vector3.Lerp로 상대방 캐릭터를 부드럽게 보간",
    proj2_algo3: "📡 매칭 파이프라인 — Lobby에서 빈 방 탐색 → 없으면 호스트 생성 → Relay JoinCode로 연결",
    proj2_algo4: "🎯 타격 판정 — ServerRpc로 타격 이벤트 전달 → 피격 클라이언트에서만 데미지 처리",
    proj2_code_title: "핵심 코드"
  },

  ja: {
    nav_about: "紹介",
    nav_projects: "プロジェクト",
    nav_contact: "お問い合わせ",
    hero_title: "ゲーム開発者",
    hero_desc: "創造的なプレイ体験を作る開発者",
    hero_btn: "プロジェクトを見る",
    about_title: "自己紹介",
    about_desc: "Unityベースのゲーム開発者です。3Dアクションゲームの制作経験があります。",
    projects_title: "プロジェクト",
    contact_title: "連絡先",
    // ── proj1
    proj1_title: "AI Smart File Organizer",
    proj1_short: "AIがファイルを自動分類・整理するPythonツール",
    proj1_more: "詳細を見る →",
    modal_overview_title: "プロジェクト概要",
    modal_overview_desc: "ファイル名と拡張子だけでGemini 2.5 Flashモデルがカテゴリを推論し、作成年/カテゴリの2階層ディレクトリを自動生成してファイルを分類するPython自動化ツールです。",
    modal_features_title: "主な機能",
    modal_feat1: "🤖 AIメタデータ推論 — Gemini APIでファイルカテゴリを自動判別",
    modal_feat2: "📁 動的ディレクトリ生成 — 年/カテゴリの2階層自動構造化",
    modal_feat3: "🌐 多言語ファイル名対応 — UTF-8強制適用で日/韓ファイル名を処理",
    modal_feat4: "🛡️ 自己参照バグ防止 — 実行スクリプト自身を移動対象から除外",
    modal_trouble_title: "トラブルシューティング",
    modal_trouble_desc: "Python 3.14環境で多言語ファイル名処理時にASCII Codecエラーが発生 → sys.stdout.reconfigure + ターミナル -X utf8フラグの組み合わせでディープレベル解決。",
    modal_code_title: "ソースコード",
    // ── proj2
    proj2_title: "THE ARXHERS",
    proj2_short: "弓を主力武器にした1vs1オンラインFPSゲーム",
    proj2_more: "詳細を見る →",
    proj2_screenshot: "📸 スクリーンショット準備中",
    proj2_story_title: "制作のきっかけ",
    proj2_story_desc: "FPSジャンルは銃が主力武器のゲームがほとんどです。しかし冷兵器時代でも弓は最も普及した遠距離武器でした。「銃がなくてもFPSになれるのでは？」というアイデアから、弓のチャージとポジションという物理特性をFPSに組み込んだ1vs1対戦ゲームを開発しました。",
    proj2_features_title: "ゲーム説明 & 主な機能",
    proj2_feat1: "🏹 チャージ射撃システム — マウスを押す時間で矢の速度が変化（Lerp適用）",
    proj2_feat2: "🌀 放物線物理 — Rigidbody＋重力で自然な矢の軌跡を実現",
    proj2_feat3: "🎯 部位別ダメージ倍率 — 頭175% / 胴体100% / 手足60%",
    proj2_feat4: "🌐 オンラインマッチング — Unity Lobby＋RelayでNATなしP2Pマッチング",
    proj2_feat5: "💊 回復アイテム — 15秒クールタイムでリスポーンする回復アイテム",
    proj2_algo_title: "主要アルゴリズム",
    proj2_algo1: "⚡ チャージ補間 — Mathf.Lerp(minSpeed, maxSpeed, chargeRatio)で最小〜最大速度を滑らかに連結",
    proj2_algo2: "🔄 ネットワーク同期 — 20Hzで位置/回転を送信しVector3.Lerpで相手キャラを補間",
    proj2_algo3: "📡 マッチングパイプライン — Lobbyで空き部屋を探索 → なければホスト作成 → Relay JoinCodeで接続",
    proj2_algo4: "🎯 ヒット判定 — ServerRpcで命中イベントを送信 → 被弾クライアントのみでダメージ処理",
    proj2_code_title: "主要コード"
  },

  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "Game Developer",
    hero_desc: "Creating immersive and creative play experiences",
    hero_btn: "View Projects",
    about_title: "About Me",
    about_desc: "Unity-based game developer with experience in 3D action games.",
    projects_title: "Projects",
    contact_title: "Contact",
    // ── proj1
    proj1_title: "AI Smart File Organizer",
    proj1_short: "A Python tool that automatically categorizes and organizes files using AI",
    proj1_more: "View Details →",
    modal_overview_title: "Project Overview",
    modal_overview_desc: "A Python automation tool that uses Gemini 2.5 Flash to infer file categories from filenames and extensions, then auto-generates a 2-depth directory structure (year/category) to sort files.",
    modal_features_title: "Key Features",
    modal_feat1: "🤖 AI Metadata Inference — Auto-classify files via Gemini API",
    modal_feat2: "📁 Dynamic Directory Creation — Auto 2-depth year/category structure",
    modal_feat3: "🌐 Multilingual Filename Support — Forced UTF-8 for Korean/Japanese filenames",
    modal_feat4: "🛡️ Self-Reference Bug Prevention — Excludes the running script from being moved",
    modal_trouble_title: "Troubleshooting",
    modal_trouble_desc: "ASCII Codec error occurred with multilingual filenames in Python 3.14 → resolved at deep level using sys.stdout.reconfigure combined with terminal -X utf8 flag.",
    modal_code_title: "Source Code",
    // ── proj2
    proj2_title: "THE ARXHERS",
    proj2_short: "A 1vs1 online FPS game with bow as the primary weapon",
    proj2_more: "View Details →",
    proj2_screenshot: "📸 Screenshots coming soon",
    proj2_story_title: "Why I Built This",
    proj2_story_desc: "Almost every FPS game revolves around firearms. But even before gunpowder, the bow was the most universal ranged weapon of its era. I asked myself: \"Can an FPS work without guns?\" — and built a 1vs1 competitive game where the bow's charge mechanics and projectile physics take center stage.",
    proj2_features_title: "Game Overview & Features",
    proj2_feat1: "🏹 Charge-to-Fire System — Arrow speed scales with how long you hold the mouse (Lerp applied)",
    proj2_feat2: "🌀 Parabolic Physics — Rigidbody + gravity creates realistic arrow trajectories",
    proj2_feat3: "🎯 Hit Location Multipliers — Head 175% / Body 100% / Limbs 60%",
    proj2_feat4: "🌐 Online Matchmaking — NAT-free P2P via Unity Lobby + Relay",
    proj2_feat5: "💊 Heal Items — Respawn every 15 seconds on the map",
    proj2_algo_title: "Core Algorithms",
    proj2_algo1: "⚡ Charge Interpolation — Mathf.Lerp(minSpeed, maxSpeed, chargeRatio) smoothly maps charge to arrow speed",
    proj2_algo2: "🔄 Network Sync — Sends position/rotation at 20Hz, uses Vector3.Lerp to smoothly interpolate the opponent",
    proj2_algo3: "📡 Matchmaking Pipeline — Search for open lobby → create as host if none → connect via Relay JoinCode",
    proj2_algo4: "🎯 Hit Detection — ServerRpc reports a hit → damage is applied only on the hit client",
    proj2_code_title: "Core Code"
  }
};

const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

setLanguage("ko");
