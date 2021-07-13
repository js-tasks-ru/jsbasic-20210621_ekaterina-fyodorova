function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  document.body.append(ul);

  for (let key of friends) {
    const li = document.createElement('li');
    ul.append(li);
    li.textContent = `${key.firstName} ${key.lastName}`;
  }

  return ul;
}
