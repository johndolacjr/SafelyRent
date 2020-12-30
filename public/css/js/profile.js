const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#tenant-name').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#tenant-desc').value.trim();
  
    // if (name && needed_funding && description) {
    //   const response = await fetch(`/api/??????"projects"`, {
        method: 'POST',
        // body: JSON.stringify({ name, needed_funding, description }),
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
  
    //   const response = await fetch(`/api/???????????"projects"/${id}`, {
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
  