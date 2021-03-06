const newFormHandler = async (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#tenant-name').value.trim();
  // console.log(name);
  const tenant_rating = document.querySelector('#tenant-rating').value.trim();
  const paymentTimlinessScore = document.querySelector('#tenant-time').value.trim();
  const cleanlinessScore = document.querySelector('#tenant-clean').value.trim();
  const propertyUpkeepScore = document.querySelector('#tenant-upkeep').value.trim();
  const communicationScore = document.querySelector('#tenant-communicate').value.trim();
  const friendlinessScore = document.querySelector('#tenant-friend').value.trim();
  const description = document.querySelector('#tenant-desc').value.trim();

  if (name && tenant_rating && paymentTimlinessScore && cleanlinessScore && propertyUpkeepScore && communicationScore && friendlinessScore && description) {
    const response = await fetch(`../api/tenants`, {
      method: 'POST',
      body: JSON.stringify({ name, tenant_rating, paymentTimlinessScore, cleanlinessScore, propertyUpkeepScore, communicationScore, friendlinessScore, description }),
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
  .querySelector('#new-tenant-form')
  .addEventListener('submit', newFormHandler);

if (document.querySelector('.tenant-list') !== null) {
  document
    .querySelector('.tenant-list')
    .addEventListener('click', delButtonHandler);
}

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