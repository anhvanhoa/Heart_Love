fetch('http://localhost:3002/edit/newposts/631ae1c85154910e84f2e14e')
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });