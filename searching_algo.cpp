
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int linearSearch(vector<int> arr, int key){
    for(int i=0;i<arr.size();i++){
        if(arr[i]==key)
            return i;
    }
    return -1;
}

int binarySearch(vector<int> arr,int key){

    int low=0;
    int high=arr.size()-1;

    while(low<=high){
        int mid=(low+high)/2;

        if(arr[mid]==key)
            return mid;

        else if(key<arr[mid])
            high=mid-1;

        else
            low=mid+1;
    }

    return -1;
}

int jumpSearch(vector<int> arr,int key){

    int n=arr.size();
    int step=sqrt(n);
    int prev=0;

    while(arr[min(step,n)-1] < key){
        prev=step;
        step+=sqrt(n);

        if(prev>=n)
            return -1;
    }

    while(arr[prev] < key){
        prev++;

        if(prev==min(step,n))
            return -1;
    }

    if(arr[prev]==key)
        return prev;

    return -1;
}

int main(){

    int n,key;
    cout<<"Enter number of elements: ";
    cin>>n;

    vector<int> arr(n);

    cout<<"Enter elements: ";
    for(int i=0;i<n;i++)
        cin>>arr[i];

    cout<<"Enter element to search: ";
    cin>>key;

    int result=linearSearch(arr,key);

    if(result==-1)
        cout<<"Element not found";
    else
        cout<<"Element found at index "<<result;

    return 0;
}
