const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#tenant-name').value.trim();
  const userName = document.querySelector('#tenant-user').value.trim();
  const address = document.querySelector('#tenant-address').value.trim();
  const timeliness = document.querySelector('#tenant-timeliness').value.trim(); 
  const cleanliness = document.querySelector('#tenant-cleanliness').value.trim();
  const upkeep = document.querySelector('#tenant-upkeep').value.trim();
  const communication = document.querySelector('#tenant-communication').value.trim();
  const friendliness = document.querySelector('#tenant-friendliness').value.trim();
  const description = document.querySelector('#tenant-desc').value.trim();

  
  if (name && userName && address && timeliness && cleanliness && upkeep && communication && friendliness && description) {
    const response = await fetch(`/api/tenants`, {
      method: 'POST',
       
      body: JSON.stringify({ name, userName, address, timeliness, cleanliness, upkeep, communication, friendliness, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create tenant');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/tenants/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete tenant');
    }
  }
};

document
  .querySelector('.new-tenant-form')
  .addEventListener('submit', newFormHandler);

if (document.querySelector('.tenant-list') !== null) {
  document
    .querySelector('.tenant-list')
    .addEventListener('click', delButtonHandler);
}

//Log Id's for star voting 
// var logID = 'log',
//   log = $('<div id="'+logID+'"></div>');
// $('body').append(log);
//   $('[type*="radio"]').change(function () {
//     var me = $(this);
//     log.html(me.attr('value'));
//   });


// document.querySelector("#example-form").addEventListener("submit", function(event) {
//   event.preventDefault();

//   const exampleInput = document.querySelector("#example-input").value;
//   fetch("/api/tenants/pogo-stick", {
//     method: 'POST',
//       body: JSON.stringify({
//         exampleInput: exampleInput
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//   })
// })