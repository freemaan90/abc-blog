import React from 'react';
import {PostMasonry} from '../components/common'
import trending from '../assets/mocks/trending'

const Home = () => {
    return (
        <section className="container home">
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMasonry posts={trending} columns={3} />
            </div>
        </section>
    );
};

export default Home;