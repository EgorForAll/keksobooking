// Загузка аватарки
const avatar = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview').firstElementChild;
const photo = document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo');
photoPreview.setAttribute('style', 'display: flex');
photoPreview.setAttribute('style', 'text-align: center');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

avatar.addEventListener('change', () => {
  const file = avatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

// Загрузить фото жилья
photo.addEventListener('change', () => {
  const file = photo.files[0];
  const fileName = file.name.toLowerCase();
  const img = document.createElement('img');
  img.setAttribute('style', 'width: 100%');
  img.setAttribute('style', 'height: 100%');
  photoPreview.appendChild(img);

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    img.src = URL.createObjectURL(file);
  }
});
