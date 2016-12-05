import {Component} from "@angular/core";

class Data {
    id: number;
    votes: number;
    title: string;
    link: string;
    constructor(id: number, votes: number, title: string, link: string) {
        this.id = id;
        this.votes = votes;
        this.title = title;
        this.link = link;
    }
}

@Component({
    selector: "my-list",
    host: {
        class: "row"
    },
    templateUrl: "../templates/list.html"
})

export class ListComponent {
    // 定义变量, 类型是自定义的对象类型, 添加数组对象。
    data: Data[];
    constructor() {
        this.data = [
            new Data(0, 10, "百度", "http://www.baidu.com"),
            new Data(1, 10, "Google", "http://www.google.hk"),
            new Data(2, 10, "360", "http://www.360.com"),
            new Data(3, 10, "搜狗", "http://www.sogou.com")
        ]
    }
    voteUp(i) {
        this.data[i].votes += 1;
        return false;
    }
    voteDown(i) {
        this.data[i].votes -= 1;
        return false;
    }
}
