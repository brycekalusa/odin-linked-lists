class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        let tmp = this.listHead;
        while (tmp.next !== null) tmp = tmp.next;
        tmp.next = new Node(value);
    }

    prepend(value) {
        let tmp = null;
        if (this.listHead !== null) tmp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.next = tmp;
    }

    size() {
        let tmp = this.listHead;
        let counter = 0;
        while (tmp !== null) {
            counter++;
            tmp = tmp.next;
        }
        return counter;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let tmp = this.listHead;
        while (tmp.next !== null) tmp = tmp.next;
        return tmp;
    }

    at(index) {
        let tmp = this.listHead;
        for (let i = 0; i < index; i++) {
            tmp = tmp.next;
            if (tmp === null) return "No item at index";
        }
        return tmp;
    }

    pop() {
        let current = this.listHead;
        let previous = null;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    contains(value) {
        let tmp = this.listHead;
        while (tmp !== null) {
            if (tmp.value === value) return true;
            tmp = tmp.next;
        }
        return false;
    }
    find(value) {
        let tmp = this.listHead;
        let index = 0;
        while (tmp !== null) {
            if (tmp.value === value) return index;
            tmp = tmp.next;
            index++;
        }
        return null;
    }

    toString() {
        let tmp = this.listHead;
        let stringList = "";
        while (tmp != null) {
            stringList += `(${tmp.value}) -> `;
            tmp = tmp.next;
        }
        return (stringList += "null");
    }
}

class Node {
    constructor(value) {
        this.value = value || null;
        this.next = null;
    }
}

const linkedList = new LinkedList();

linkedList.prepend("apple");
linkedList.append("banana");
linkedList.append("orange");

console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.head());
console.log(linkedList.tail());
console.log(linkedList.at(0));
linkedList.pop();
console.log(linkedList.toString());
console.log(linkedList.contains("apple"));
console.log(linkedList.find("banana"));