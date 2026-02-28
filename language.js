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
    contact_title: "Contact"
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
    contact_title: "連絡先"
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
    contact_title: "Contact"
  }
};

const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", (event) => {
  const selectedLang = event.target.value;
  setLanguage(selectedLang);
});

function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    element.textContent = translations[lang][key];
  });

  document.documentElement.lang = lang;
}

// 기본 한국어 설정
setLanguage("ko");
