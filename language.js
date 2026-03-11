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
    modal_code_title: "소스 코드"
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
    modal_code_title: "ソースコード"
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
    modal_code_title: "Source Code"
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

// DOMContentLoaded 이후 실행 보장
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("ko");
});
