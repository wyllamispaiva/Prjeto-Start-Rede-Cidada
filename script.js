// Inicializa o elemento de pesquisa
const searchInput = document.querySelector(".jobs-list input");

// Define o evento de clique no botão de pesquisa
searchInput.addEventListener("click", (e) => {
  // Obtém o texto da pesquisa
  const searchText = searchInput.value;

  // Filtra a lista de trabalhos
  const filteredJobs = document.querySelectorAll(".jobs-list li");
  filteredJobs.forEach((job) => {
    // Verifica se o texto da pesquisa está presente no título do trabalho
    if (job.querySelector("h3").textContent.toLowerCase().includes(searchText.toLowerCase())) {
      job.style.display = "block";
    } else {
      job.style.display = "none";
    }
  });
});
