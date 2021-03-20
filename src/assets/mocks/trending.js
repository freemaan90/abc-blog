import moment from "moment";

const trending = [
    {
        title: "Can anyone code ?",
        date: moment().format('MMMM DD, YYYY'),
        categories: ["Tech culture", "Tech news"],
        link: '#',
        image: "can_anyome_code.jpeg"
    },
    {
        title: "Using AWS S3 for staring blog images",
        date: moment().format('MMMM DD, YYYY'),
        categories: ["Cloud"],
        link: "#",
        image: "amazon_s3.png"
    },
    {
        title: "Popular programming lenguaje in 2020",
        date: moment().format('MMMM DD, YYYY'),
        categories: ["Tech news", "Tech culture"],
        link: "#",
        image: "programming_lenguages_2020.jpeg"
    },
    {
        title: "Brain hacks for learning to program",
        date: moment().format('MMMM DD, YYYY'),
        categories: ["Brain health"],
        link: "#",
        image: "brain_health.png"
    },

]

export default trending