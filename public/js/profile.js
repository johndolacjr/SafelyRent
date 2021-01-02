const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#tenant-name').value.trim();
    const tenant_rating = document.querySelector('#tenant-rating').value.trim();
    const description = document.querySelector('#tenant-desc').value.trim();
  
    if (name && tenant_rating && description) {
      const response = await fetch(`/api/tenants`, {
        method: 'POST',
        body: JSON.stringify({ name, tenant_rating, description }),
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
  
  document
    .querySelector('.tenant-list')
    .addEventListener('click', delButtonHandler);
  