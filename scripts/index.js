const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostButton = document.querySelector(".profile__new-post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCaptionInput = newPostModal.querySelector(
  "#profile-caption-input"
);
const newPostImageInput = newPostModal.querySelector("#card-image-input");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});
newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("editProfileModal");
}

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  editProfileModal.classList.remove("newPostModal");
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
newPostForm.addEventListener("submit", handleNewPostFormSubmit);
