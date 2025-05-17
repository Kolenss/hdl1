document.addEventListener("DOMContentLoaded", () => {
  const candidates = document.querySelectorAll(".candidate");
  const card = document.querySelector(".candidate-card");
  const container = document.querySelector(".container");
  const backButton = document.querySelector(".back-button");

  const headerImg = card.querySelector(".header-img");
  const profileImg = card.querySelector(".profile-pic");
  const nameElem = card.querySelector(".name");
  const affiliationsList = card.querySelectorAll(".section ul")[0];
  const platformsList = card.querySelectorAll(".section ul")[1];
  const voteBox = card.querySelector(".vote-box span");

  const candidateData = {
    0: {
      name: "Jane Doe",
      headerImg: "pictures/jane.png",
      profileImg: "pictures/candidate-photo.png",
      affiliations: ["XY and AB Partylist", "Sangguniang Kabataan"],
      platforms: ["Feeding Program", "Free Dental Care"],
      votes: "120,690,012",
    },
    1: {
      name: "John Doe",
      headerImg: "pictures/John.png",
      profileImg: "pictures/John.png",
      affiliations: ["Monogamy Partylist"],
      platforms: ["Public Safety", "Anti-Corruption"],
      votes: "89,420,019",
    },
    2: {
      name: "William Angelbert von DeMarc",
      headerImg: "pictures/William.png",
      profileImg: "pictures/William.png",
      affiliations: ["Independent"],
      platforms: ["Youth Empowerment", "Transparent Governance"],
      votes: "14,002,903",
    }
  };

  candidates.forEach((candidate, index) => {
    candidate.addEventListener("click", () => {
      if (!card.classList.contains("hidden")) return;

      const data = candidateData[index];
      headerImg.src = data.headerImg;
      profileImg.src = data.profileImg;
      nameElem.textContent = data.name;
      affiliationsList.innerHTML = data.affiliations.map(item => `<li>${item}</li>`).join("");
      platformsList.innerHTML = data.platforms.map(item => `<li>${item}</li>`).join("");
      voteBox.textContent = data.votes;

      card.classList.remove("hidden");
      container.classList.add("blurred");
      backButton.classList.remove("hidden");
      document.body.style.cursor = "default";
    });
  });

  document.addEventListener("click", (e) => {
    const isInsideCard = card.contains(e.target);
    const isCandidateClick = [...candidates].some(c => c.contains(e.target));
    const isBackButton = e.target === backButton || backButton.contains(e.target);

    if (!isInsideCard && !isCandidateClick && !isBackButton && !card.classList.contains("hidden")) {
      card.classList.add("hidden");
      container.classList.remove("blurred");
      backButton.classList.add("hidden");
      document.body.style.cursor = "default";
    }
  });

  backButton.addEventListener("click", () => {
    card.classList.add("hidden");
    container.classList.remove("blurred");
    backButton.classList.add("hidden");
  });
});
