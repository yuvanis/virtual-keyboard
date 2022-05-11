const BODY = document.querySelector('body');
const EN_LOWER = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '◀', '▼', '▶', 'Ctrl'];
const EN_UPPER = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '◀', '▼', '▶', 'Ctrl'];
const RU_LOWER = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '◀', '▼', '▶', 'Ctrl'];
const RU_UPPER = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '◀', '▼', '▶', 'Ctrl'];

BODY.innerHTML = `
  <div class="container">
  <textarea class="text"></textarea>
  <div class="keyboard_wrapp">
      <div class="keyboard_keys">
          <div class="row">
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys speshial_keys backspace_key"></div>
          </div>
          <div class="row">
              <div class="keys speshial_keys tab_key"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys slash_key"></div>
              <div class="keys speshial_keys"></div>
          </div>
          <div class="row">
              <div class="keys speshial_keys capslock_key"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys speshial_keys enter_key"></div>
          </div>
          <div class="row">
              <div class="keys speshial_keys shift_key shift_left"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys speshial_keys shift_key shift_right"></div>
          </div>
          <div class="row">
              <div class="keys speshial_keys ctrl_key ctrl_left"></div>
              <div class="keys speshial_keys win_key"></div>
              <div class="keys speshial_keys alt_key alt_left"></div>
              <div class="keys space_key"></div>
              <div class="keys speshial_keys alt_key alt_right"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys"></div>
              <div class="keys speshial_keys ctrl_key ctrl_right"></div>
          </div>
      </div>
  </div>
  <p class="title">The keyboard was created in the OS Windows. Switch language: Left Shift + Left Alt</p>
  <p>Уважаемый проверяющий. По семейным обстоятельствам не успел выполнить работу в срок. Буду очень признателен, если вы проверите мою работу в среду вечером (11-го числа). Оставьте, пожалуйста, свои контакты, чтобы я мог напомнить о проверке. Пока можете проверить выполненные пункты. Спасибо.</p>
</div>
  `;

const KEYS = document.querySelectorAll('.keys');
const SPACE = document.querySelector('.space_key');
const SHIFT_LEFT = document.querySelector('.shift_left');
const SHIFT_RIGHT = document.querySelector('.shift_right');
const ALT_LEFT = document.querySelector('.alt_left');
const ALT_RIGHT = document.querySelector('.alt_right');
const CTRL_LEFT = document.querySelector('.ctrl_left');
const CTRL_RIGHT = document.querySelector('.ctrl_right');
const CAPSLOCK = document.querySelector('.capslock_key');
const TEXT = document.querySelector('.text');

function setLocalStorage() {
  localStorage.setItem('language', 'en');
}

window.addEventListener('load', setLocalStorage);

function setLowerCase() {
  if (localStorage.getItem('language') === 'en') {
    for (let i = 0; i < KEYS.length; i += 1) {
      KEYS[i].innerText = EN_LOWER[i];
    }
  } else if (localStorage.getItem('language') === 'ru') {
    for (let i = 0; i < KEYS.length; i += 1) {
      KEYS[i].innerText = RU_LOWER[i];
    }
  }
}

function setUpperCase() {
  if (localStorage.getItem('language') === 'en') {
    for (let i = 0; i < KEYS.length; i += 1) {
      KEYS[i].innerText = EN_UPPER[i];
    }
  } else if (localStorage.getItem('language') === 'ru') {
    for (let i = 0; i < KEYS.length; i += 1) {
      KEYS[i].innerText = RU_UPPER[i];
    }
  }
}

setLowerCase();

window.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.code === 'AltLeft') {
    if (localStorage.getItem('language') === 'en') {
      localStorage.setItem('language', 'ru');
    } else if (localStorage.getItem('language') === 'ru') {
      localStorage.setItem('language', 'en');
    }
    setLowerCase();
  }
});

KEYS.forEach((elem) => {
  elem.setAttribute('keyName', elem.innerText);
  elem.setAttribute('lowerCaseName', elem.innerText.toLowerCase());
});

window.addEventListener('keydown', (e) => {
  KEYS.forEach((elem) => {
    if (e.key === elem.getAttribute('keyName') || e.key === elem.getAttribute('lowerCaseName')) {
      elem.classList.add('active');
    }
    if (e.code === 'Space') {
      SPACE.classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
      setUpperCase();
    }
    if (e.code === 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
      setUpperCase();
    }
    if (e.code === 'AltLeft') {
      ALT_RIGHT.classList.remove('active');
    }
    if (e.code === 'AltRight') {
      ALT_LEFT.classList.remove('active');
    }
    if (e.code === 'ControlLeft') {
      CTRL_LEFT.classList.add('active');
    }
    if (e.code === 'ControlRight') {
      CTRL_RIGHT.classList.add('active');
    }
    if (e.code === 'CapsLock') {
      CAPSLOCK.classList.toggle('active');
    }
  });
});

window.addEventListener('keyup', (e) => {
  KEYS.forEach((elem) => {
    if (e.key === elem.getAttribute('keyName') || e.key === elem.getAttribute('lowerCaseName')) {
      elem.classList.remove('active');
      elem.classList.add('remove');
    }
    if (e.code === 'Space') {
      SPACE.classList.remove('active');
      SPACE.classList.add('remove');
    }
    if (e.code === 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
      SHIFT_RIGHT.classList.remove('remove');
      setLowerCase();
    }
    if (e.code === 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
      SHIFT_LEFT.classList.remove('remove');
      setLowerCase();
    }
    if (e.code === 'AltLeft') {
      ALT_RIGHT.classList.remove('active');
      ALT_RIGHT.classList.remove('remove');
    }
    if (e.code === 'AltRight') {
      ALT_LEFT.classList.remove('active');
      ALT_LEFT.classList.remove('remove');
    }
    if (e.code === 'ControlLeft') {
      CTRL_LEFT.classList.remove('active');
      CTRL_LEFT.classList.remove('remove');
    }
    if (e.code === 'ControlRight') {
      CTRL_RIGHT.classList.remove('active');
      CTRL_RIGHT.classList.remove('remove');
    }
    setTimeout(() => {
      elem.classList.remove('remove');
    }, 200);
  });
});

KEYS.forEach((elem) => {
  elem.addEventListener('mousedown', () => {
    elem.classList.add('active');
    if (elem.classList.contains('speshial_keys')) {
      TEXT.value += '';
    } else {
      TEXT.value += elem.textContent;
    }
  });
});

KEYS.forEach((elem) => {
  elem.addEventListener('mouseup', () => {
    elem.classList.remove('active');
    elem.classList.add('remove');
    setTimeout(() => {
      elem.classList.remove('remove');
    }, 200);
  });
});
