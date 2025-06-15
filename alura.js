(function () {
  'use strict';

  const headerInfo = document.querySelector("small.task-body-header-title");
  if (headerInfo) {
    const msg = atob(
      "dmFvIHNlIGZ1ZGVyZW0gfCBtYWRlIGJ5IG1hcmNvczEwcGMgfCBkaXNjb3JkLmdnL3BsYXRmb3JtZGVzdHJveWVyIHwgc2Ugdm9jw6ogcGFnb3UgcG9yIGlzc28sIGZvaSBzY2FtbWFkbw=="
    );
    headerInfo.textContent = msg;
  }

  const currentUrl = window.location.href;
  const urlParts = currentUrl.split('/');
  const courseId = urlParts[4];
  const taskId = urlParts[6];

  const projectButton = document.querySelector(".project-link");
  const projectHref = projectButton?.getAttribute("href") || "";
  const projectId = projectHref.startsWith('/') ? projectHref.slice(1) : projectHref;

  document.getElementById("submitBlocks")?.click();

  const correctCheckboxes = document.querySelectorAll('li[data-correct="true"] input[type="checkbox"]');
  correctCheckboxes.forEach(input => {
    if (!input.checked) input.click();
  });

  const correctRadios = document.querySelectorAll('.alternativeList-item[data-correct="true"] input[type="radio"]');
  correctRadios.forEach(input => input.click());

  document.querySelector(".bootcamp-next-button")?.click();

  const taskButton = document.querySelector(".task-actions-button");
  if (taskButton) {
    const correctInputs = taskButton.querySelectorAll('input[type="checkbox"]');
    correctInputs.forEach(input => {
      if (!input.checked) input.click();
    });
  }

  const taskActions = document.getElementsByClassName("task-actions-button-next")[0];
  if (taskActions) {
    setTimeout(() => taskActions.click(), 5000);
  }

  if (currentUrl.includes("/linksubmit")) {
    const submitUrl = `https://cursos.alura.com.br/course/${courseId}/section/${projectId}/linksubmit/answer`;

    const body = {
      taskId: Number(taskId),
      alternatives: [],
      linkUrl: "https://github.com/undefined/" // Link fake (placeholder)
    };

    fetch(submitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    });

    alert("Uh, Infelizmente no momento o alura destroyer não envia link de projetos, você está sozinho nessa lil bro 💀\n\n(um link em branco foi enviado no lugar para manter a porcentagem de 100%)");
  }

})();
