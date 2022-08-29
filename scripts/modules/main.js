import { subscribeToHellfireClub } from "./firebase/hellfire-club.js";

export default function subHellfire() {
  const txtName = document.getElementById("txtName");
  const txtEmail = document.getElementById("txtEmail");
  const txtLevel = document.getElementById("txtLevel");
  const txtCharacter = document.getElementById("txtCharacter");

  const btnSub = document.getElementById("btnSub");

  const statusForm = document.getElementById("msg-form-complete");
  const containerForm = statusForm.parentNode;

  btnSub.addEventListener("click", async () => {
    const subscription = {
      name: txtName.value,
      email: txtEmail.value,
      level: txtLevel.value,
      character: txtCharacter.value,
    };

    if (
      !txtName.value ||
      !txtEmail.value ||
      !txtLevel.value ||
      !txtCharacter.value
    ) {
      statusForm.innerHTML = "<p>Preencha os campos corretamente</p>";
    } else {
      const subscriptionId = await subscribeToHellfireClub(subscription);

      statusForm.innerHTML = "<p>Inscrito com sucesso</p>";

      txtName.value = "";
      txtEmail.value = "";
      txtLevel.value = "";
      txtCharacter.value = "";
    }

    containerForm.classList.add("sucess");

    setTimeout(function () {
      containerForm.classList.remove("sucess");
    }, 5000);
  });
}
