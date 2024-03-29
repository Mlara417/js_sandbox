class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" style="margin-left: auto; margin-right: auto; width: 99%;" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn mb-4 btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info mt-1">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_art}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
            
        `;
    }

    //Show user repos
    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-4">
                            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-4">
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        </div>


                        <div class="col-md-4 col-sm-4 col-xs-4">
                            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        //Output repos
        document.getElementById('repos').innerHTML = output;
    }

    //show alert message
    showAlert(message, className) {
        //clear any remaining alerts
        this.clearAlert();

        const div = document.createElement('div');
        // add classes
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search);

        //Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    //clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}