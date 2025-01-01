function skillsMember() {
    var member = {
        name: 'Skills',
        age: 18,
        skills: ['HTML', 'CSS', 'JS'],
        showSkills: function() {
            var skills = this.skills;
            skills.forEach(function(skill) {
                console.log(skill);
            });
        }
    };
    return member;
}