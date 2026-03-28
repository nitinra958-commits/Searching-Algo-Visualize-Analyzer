function linearSearch(arr,key){
for(let i=0;i<arr.length;i++){
if(arr[i]==key)
return i;
}
return -1;
}

function binarySearch(arr,key){
let low=0;
let high=arr.length-1;

while(low<=high){
let mid=Math.floor((low+high)/2);

if(arr[mid]==key)
return mid;

else if(key<arr[mid])
high=mid-1;

else
low=mid+1;
}

return -1;
}

function jumpSearch(arr,key){
let n=arr.length;
let step=Math.floor(Math.sqrt(n));
let prev=0;

while(arr[Math.min(step,n)-1] < key){
prev=step;
step+=Math.floor(Math.sqrt(n));
if(prev>=n)
return -1;
}

while(arr[prev] < key){
prev++;
if(prev==Math.min(step,n))
return -1;
}

if(arr[prev]==key)
return prev;

return -1;
}

function searchElement(){

let arrInput=document.getElementById("array").value;
let key=parseInt(document.getElementById("key").value);
let algo=document.getElementById("algorithm").value;

let arr=arrInput.split(",").map(Number);

let index=-1;
let time="";
let space="";

if(algo=="linear"){

index=linearSearch(arr,key);
time="Time Complexity: O(n)";
space="Space Complexity: O(1)";

}

else if(algo=="binary"){

arr.sort((a,b)=>a-b);
index=binarySearch(arr,key);
time="Time Complexity: O(log n)";
space="Space Complexity: O(1)";

}

else if(algo=="jump"){

arr.sort((a,b)=>a-b);
index=jumpSearch(arr,key);
time="Time Complexity: O(√n)";
space="Space Complexity: O(1)";

}

else if(algo=="interpolation"){

arr.sort((a,b)=>a-b);
index=interpolationSearch(arr,key);
time="Time Complexity: O(log log n)";
space="Space Complexity: O(1)";

}

else if(algo=="exponential"){

arr.sort((a,b)=>a-b);
index=exponentialSearch(arr,key);
time="Time Complexity: O(log n)";
space="Space Complexity: O(1)";

}

if(index==-1)
document.getElementById("result").innerHTML="Element not found";
else
document.getElementById("result").innerHTML="Element found at index "+index;

document.getElementById("time").innerHTML=time;
document.getElementById("space").innerHTML=space;

}
