var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);



// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li); 
  var chkBtn = document.createElement('button1'); 
 chkBtn.className ='btn btn-success btn-sm float-right delete'; 
 chkBtn.appendChild(document.createTextNode('Check')); 
 li.appendChild(chkBtn);

}
 
 


// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    else
    { 
            var li=e.target.parentElement; 
        
            li.style.backgroudcolor='blue';
        }
        
}  

