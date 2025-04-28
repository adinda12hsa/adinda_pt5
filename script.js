// Ambil elemen penting
const addGuestButton = document.getElementById('add-guest-button');
const guestNameInput = document.getElementById('guest-name-input');
const guestList = document.getElementById('guest-list');

// Fungsi menambahkan tamu
function addGuest(name) {
  // Buat elemen list
  const li = document.createElement('li');
  li.style.listStyle = 'none';
  li.style.backgroundColor = '#e6f0ff'; // biru muda
  li.style.marginBottom = '10px';
  li.style.padding = '10px';
  li.style.borderRadius = '10px';
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  li.style.alignItems = 'center';

  // Nama tamu
  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  nameSpan.style.flexGrow = '1';

  // Container untuk tombol
  const buttonGroup = document.createElement('div');

  // Tombol Edit/Simpan
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.style.backgroundColor = '#0c0553';
  editButton.style.color = '#fff';
  editButton.style.border = 'none';
  editButton.style.marginLeft = '5px';
  editButton.style.padding = '5px 10px';
  editButton.style.borderRadius = '5px';
  editButton.style.cursor = 'pointer';

  // Tombol Hapus
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Hapus';
  deleteButton.style.backgroundColor = '#0c0553';
  deleteButton.style.color = '#fff';
  deleteButton.style.border = 'none';
  deleteButton.style.marginLeft = '5px';
  deleteButton.style.padding = '5px 10px';
  deleteButton.style.borderRadius = '5px';
  deleteButton.style.cursor = 'pointer';

  // Logic tombol edit
  editButton.addEventListener('click', () => {
    if (nameSpan.isContentEditable) {
      // Mode edit ke normal
      nameSpan.contentEditable = false;
      editButton.textContent = 'Edit';
      editButton.style.backgroundColor = '#0c0553';
    } else {
      // Mode normal ke edit
      nameSpan.contentEditable = true;
      nameSpan.focus();
      editButton.textContent = 'Simpan';
      editButton.style.backgroundColor = '#64d8ff'; // hijau saat edit
    }
  });

  // Logic tombol hapus
  deleteButton.addEventListener('click', () => {
    guestList.removeChild(li);
  });

  // Masukkan tombol ke dalam group
  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);

  // Masukkan semua ke dalam li
  li.appendChild(nameSpan);
  li.appendChild(buttonGroup);

  // Tambahkan ke daftar tamu
  guestList.appendChild(li);
}

// Saat tombol Tambah Tamu diklik
addGuestButton.addEventListener('click', () => {
  const name = guestNameInput.value.trim();
  if (name !== '') {
    addGuest(name);
    guestNameInput.value = ''; // kosongkan input
  } else {
    alert('Nama tidak boleh kosong!');
  }
});
