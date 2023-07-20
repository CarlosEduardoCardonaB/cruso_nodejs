function tree(value){
    this.data = value;
    this.rigth = null;
    this.lefth = null;
}
tree.prototype.add = function(value){
    if(value < this.data)
    {
        if(this.lefth == null){ // también se puede usar: if(!this.left)...
            this.lefth = new tree(value);
        }
        else{
            this.lefth.add(value)
        }        
    }
    else 
    {
        if(this.rigth == null){
            this.rigth = new tree(value);
        }
        else{
            this.rigth.add(value);
        }        
    }
}

let tree1 = new tree(50);
tree1.add(20);
tree1.add(30);
tree1.add(70);
tree1.add(45);
tree1.add(29);
tree1.add(69);

console.log(tree1);