import axios from 'axios'
import { io } from "socket.io-client";

class Wasteof2 {
    async getTopUsers() {
        const response = await axios({
            url: `https://api.wasteof.money/explore/users/top`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getTopPosts(timeframe:string) {
        if (['week', 'month', 'day', 'all'].includes(timeframe)) {
            const response = await axios({
                url: `https://api.wasteof.money/explore/posts/trending?timeframe=${timeframe}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://api.wasteof.money/explore/posts/trending`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async getUsernameFromID(id:string) {
        const response = await axios({
            url: `https://api.wasteof.money/username-from-id/${id}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async checkUsername(name:string) {
        const response = await axios({
            url: `https://api.wasteof.money/username-available?username=${name}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getPost(id:string) {
        const response = await axios({
            url: `https://api.wasteof.money/posts/${id}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getCommentsOnPost(id:string, page?:number) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://api.wasteof.money/posts/${id}/comments?page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://api.wasteof.money/posts/${id}/comments`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async searchUsers(query:string, page:number = 1) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://api.wasteof.money/search/users?q=${encodeURIComponent(query)}&page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://api.wasteof.money/search/users?q=${encodeURIComponent(query)}`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async searchPosts(query:string, page:number = 1) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://api.wasteof.money/search/posts?q=${encodeURIComponent(query)}&page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://api.wasteof.money/search/posts?q=${encodeURIComponent(query)}`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async getRepliesToComment(id:string, page?:number) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://api.wasteof.money/comments/${id}/replies?page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://api.wasteof.money/comments/${id}/replies`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async getWallComments(name:string,page:number = 1) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://api.wasteof.money/users/${name}/wall?page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://api.wasteof.money/${name}/wall`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async requestPasswordReset(username:string) {
        const response = await axios({
            data: {
                username: username
            },
            url: `https://api.wasteof.money/settings/passsword-reset`,
            method: 'put'
        })
        const json = await response.data
        return json
    }
    async getUser(name:string) {
        const response = await axios({
            url: `https://api.wasteof.money/users/${name}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getFollowersOfUser(name:string,page:number = 1) {
        const response = await axios({
            url: `https://api.wasteof.money/users/${name}/followers?page=${page}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getIfUserIsFollowingUser(user1:string, user2:string) {
        const response = await axios({
            url: `https://api.wasteof.money/users/${user2}/followers/${user1}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getFollowingOfUser(name:string,page:number = 1) {
        const response = await axios({
            url: `https://api.wasteof.money/users/${name}/following?page=${page}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getPicture(name:string) {
        const response = await axios({
            url: `https://api.wasteof.money/users/${name}/picture`,
            method: 'get',
            responseType: 'blob'
        })
        const file = await response.data
        return file
    }
    async getBanner(name:string) {
        const response = await axios({
            url: `https://api.wasteof.money/users/${name}/banner`,
            method: 'get',
            responseType: 'blob'
        })
        const file = await response.data
        return file
    }
    async getPostsOfUser(name:string,page:number = 1) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://api.wasteof.money/users/${name}/posts?page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://api.wasteof.money/users/${name}/posts`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async getFeedOfUser(name:string,page:number = 1) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://api.wasteof.money/users/${name}/following/posts?page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://api.wasteof.money/users/${name}/following/posts`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async join(name:string, password:string, captcha:any) {
        const response = await axios({
            url: `https://api.wasteof.money/users`,
            method: 'post',
            data: {
                username: name,
                password: password,
                captcha: captcha
            }
        })
        const json = await response.data
        return json
    }
}

class Wasteof2Auth {

    username:string;
    token:any;
    password:string;
    socketio:any;

    constructor(username:string, password:string) {
        this.username = username
        this.password = password
        this.socketio = io("https://api.wasteof.money", {auth:{token: this.token}})
    }
    async login() {
        const username = this.username
        const password = this.password
        const response = await axios({
            data: {
                username: username,
                password: password
            },
            url: 'https://api.wasteof.money/session',
            method: 'post'
        })
        const json = await response.data
        this.token = json.token
        this.socketio.emit('updateUser', this.token)
        return json
    }
    async getSession() {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/session`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async deleteGithubAuth() {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/settings/auth/github`,
            method: 'delete'
        })
        const json = await response.data
        return json
    }
    async deleteGoogleAuth() {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/settings/auth/google`,
            method: 'delete'
        })
        const json = await response.data
        return json
    }
    async deletePasswordAuth() {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/settings/auth/password`,
            method: 'delete'
        })
        const json = await response.data
        return json
    }
    async toggleGithubAuth(value:string) {
        if (['enable', 'disable'].includes(value)) {
            const response = await axios({
                headers: {
                    'Authorization': this.token
                },
                url: `https://api.wasteof.money/settings/auth/github/${value}`,
                method: 'post'
            })
            const json = await response.data
            return json
        }
    }
    async toggleGoogleAuth(value:string) {
        if (['enable', 'disable'].includes(value)) {
            const response = await axios({
                headers: {
                    'Authorization': this.token
                },
                url: `https://api.wasteof.money/settings/auth/google/${value}`,
                method: 'post'
            })
            const json = await response.data
            return json
        }
    }
    async togglePasswordAuth(value:string) {
        if (['enable', 'disable'].includes(value)) {
            const response = await axios({
                headers: {
                    'Authorization': this.token
                },
                url: `https://api.wasteof.money/settings/auth/password/${value}`,
                method: 'post'
            })
            const json = await response.data
            return json
        }
    }
    async hideRecoveryMessage() {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/settings/hide-recovery-message`,
            method: 'post'
        })
        const json = await response.data
        return json
    }
    async deleteRecoveryEmail() {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/settings/email`,
            method: 'delete'
        })
        const json = await response.data
        return json
    }
    async setRecoveryEmail(email:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            data: {
                email: email
            },
            url: `https://api.wasteof.money/settings/email`,
            method: 'put'
        })
        const json = await response.data
        return json
    }
    async getSettings() {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/settings`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async post(content:string, repost:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            data: {
                post: content,
                repost: repost
            },
            url: 'https://api.wasteof.money/posts',
            method: 'post'
        })
        const json = await response.data
        return json
    }
    async follow(name:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/users/${name}/followers`,
            method: 'post'
        })
        const json = await response.data
        return json
    }
    async setBio(content:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            data: {
                bio: content
            },
            url: `https://api.wasteof.money/users/${this.username}/bio`,
            method: 'put'
        })
        const json = await response.data
        return json
    }
    async setName(newName:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            data: {
                name: newName
            },
            url: `https://api.wasteof.money/users/${this.username}/name`,
            method: 'put'
        })
        const json = await response.data
        return json
    }
    async getUnreadMessages(page:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/messages/unread?page=${page}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getReadMessages(page:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/messages/read?page=${page}`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async markAsRead(messages:any) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            data: {
                messages: messages
            },
            url: `https://api.wasteof.money/messages/mark/read`,
            method: 'post'
        })
        const json = await response.data
        return json
    }
    async markAsUnread(messages:any) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            data: {
                messages: messages
            },
            url: `https://api.wasteof.money/messages/mark/unread`,
            method: 'post'
        })
        const json = await response.data
        return json
    }
    async getMessagesCount() {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/messages/count`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async listen(callback:any) {
        let socket = this.socketio
        socket.on("message", (data:any) => {
            callback({
                type: 'chat message', 
                data: data
            })
        })
        socket.on("connect", () => {
            socket.emit("updateUser", this.token)
            callback({
                type: 'connected', 
                data: true
            })
        })
        socket.on("updateMessageCount", (count:any) => {
            callback({
                type: 'updateMessageCount',
                data: count
            })
        })
    }
    chatMessage(content:any) {
        io("https://api.wasteof.money", {auth:{token: this.token}}).emit("message", content)
        //somehow this.socketio doesn't work even though it's exactly the same
    }
    async logout() {
        let socket = this.socketio
        socket.emit("updateUser", this.token)
        socket.emit("logout")
        socket.emit("updateUser",null)
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: 'https://api.wasteof.money/session',
            method: 'delete'
        })
        this.token = null
        const json = await response.data
        return json
    }
    async postWallComment(user:string, content:string, parent:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/users/${user}/wall`,
            method: 'post',
            data: {
                content: content,
                parent: parent
            }
        })
        const json = await response.data
        return json
    }
    async postComment(postid:string, content:string, parent:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/posts/${postid}/comments`,
            method: 'post',
            data: {
                content: content,
                parent: parent
            }
        })
        const json = await response.data
        return json
    }
    async editPost(id:string, content:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            data: {
                post: content
            },
            url: `https://api.wasteof.money/posts/${id}`,
            method: 'put'
        })
        const json = await response.data
        return json
    }
    async deletePost(id:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/posts/${id}`,
            method: 'delete'
        })
        const json = await response.data
        return json
    }
    async deleteComment(id:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/comments/${id}`,
            method: 'delete'
        })
        const json = await response.data
        return json
    }
    async pinPost(id:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/posts/${id}/pin`,
            method: 'post'
        })
        const json = await response.data
        return json
    }
    async unpinPost(id:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/posts/${id}/unpin`,
            method: 'post'
        })
        const json = await response.data
        return json
    }
    async reportPost(id:string, reason:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            data: {
                type: "none",
                reason: reason
            },
            url: `https://api.wasteof.money/posts/${id}/report`,
            method: 'post'
        })
        const json = await response.data
        return json
    }
    async toggleLove(id:string) {
        const response = await axios({
            headers: {
                'Authorization': this.token
            },
            url: `https://api.wasteof.money/posts/${id}/love`,
            method: 'post'
        })
        const json = await response.data
        return json
    }
}

class Wasteof3 {
    async getUser(name:string) {
        const response = await axios({
            url: `https://beta.wasteof.money/users/${name}/__data.json`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getUserCount() {
        const response = await axios({
            url: `https://beta.wasteof.money/users/`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getPost(id:string) {
        const response = await axios({
            url: `https://beta.wasteof.money/posts/${id}/__data.json`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getReposts(id:string) {
        const response = await axios({
            url: `https://beta.wasteof.money/posts/${id}/reposts/__data.json`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getSinglePostComment(postid:string, commentid:string) {
        const response = await axios({
            url: `https://beta.wasteof.money/posts/${postid}/comments/${commentid}__data.json`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getPostComments(postid:string, page:string) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://beta.wasteof.money/posts/${postid}/comments?page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://beta.wasteof.money/posts/${postid}/comments`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async getSingleWallComment(username:string, commentid:string) {
        const response = await axios({
            url: `https://beta.wasteof.money/users/${username}/wall/${commentid}/__data.json`,
            method: 'get'
        })
        const json = await response.data
        return json
    }
    async getWallComments(username:string, page:string) {
        if (typeof page == 'number') {
            const response = await axios({
                url: `https://beta.wasteof.money/users/${username}/wall/__data.json?page=${page}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://beta.wasteof.money/users/${username}/wall/__data.json`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
    async getTrending(timeframe:string) {
        if (['day','week','month','year','all'].includes(timeframe)) {
            const response = await axios({
                url: `https://beta.wasteof.money/explore/__data.json?time=${timeframe}`,
                method: 'get'
            })
            const json = await response.data
            return json
        } else {
            const response = await axios({
                url: `https://beta.wasteof.money/explore/__data.json`,
                method: 'get'
            })
            const json = await response.data
            return json
        }
    }
}

export { Wasteof2, Wasteof2Auth, Wasteof3 }
