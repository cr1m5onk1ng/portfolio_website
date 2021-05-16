import React from 'react'
import './ArticleList.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import TopicRow from './TopicRow'
import ArticleRow from './ArticleRow'


function ArticleList({topic}) {
    return (
        <div className="articlesList">
            {/* 
            <div className="articlesList__filter">
                <TuneOutlinedIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            */}
            
            
            <TopicRow
                title="Personal Projects"
                description="A list of all the projects I've been working on in the last few months"
            />
            <hr/>
            
            <ArticleRow 
                title="On-device semantic search system for small corpuses [Experiment]"
                description={"The app I'm building deals with saving sentences for later review. Wouldn't it be nice to have a tiny semantic search engine " +
                                "to easily look for similar sentences and words in our own local corpus?"}
                image="http://inmyownterms.com/wp-content/uploads/2018/02/Terminology-document-1600x1024.jpg"
                href="https://github.com/cr1m5onk1ng/text_similarity/tree/master/src/compression/mobile"
            />
           
            <ArticleRow 
                title="On-device text classification model for an android language learning app"
                description={"Recently, I've been struggling to learn Japanese. In this article, I'm going to explain how and why I decided" + 
                            "to build an on-device text classification model to help me organize the content I consume for learning purposes"}
                image="https://miro.medium.com/max/700/1*ljCBykAJUnvaZcuPYwm4_A.png"
                href="https://colab.research.google.com/drive/195YpXKjFMORpas_1xIOj0MjokTKKyFBA?usp=sharing"
            />
                 
            <ArticleRow 
                title="Dockerized semantic search Web API to serve an android language learning app"
                description={"When it comes to language learning, finding similar examples of a sentence can be a tiresome and time-consuming task." +
                                "In this article, I discuss how I implemented a semantic search microservice to use in my android app."}
                image="https://pixnio.com/free-images/2017/07/24/2017-07-24-08-37-27.jpg"
                href="https://colab.research.google.com/drive/1vwE_vJBAONIZc2tE9M1zZBrx3wnrhYKU?usp=sharing"
            />
              
            <ArticleRow 
                title="NaLa: An app for language learning support built in native android"
                description={"Learning Japanese is hard. The experience made me realize it would be awesome to have some tools readily available " +
                            "that could help me save time and make my experience more engaging. Well, let's build it." }
                image="data:image/png;base64,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"
                href="https://github.com/cr1m5onk1ng/nala_android_app/tree/dev"
            />
 
            <ArticleRow 
                title="Limapp: An app for language immersion built using Flutter"
                description= {"The Flutter framwork looks very promising and I wanted to give it a try. Since I've started learning Japanese, I've soon realized" +
                                " there aren't many resources I could rely on on mobile. This app is a little step towards bridging that gap." }
                image="https://cdn.pixabay.com/photo/2020/07/09/20/14/video-marketing-5388656_1280.png"
                href="https://github.com/cr1m5onk1ng/limapp"
            />
        
            <ArticleRow 
                title="Evaluating Sense Embeddings in word/sentence text similarity tasks: A graduation project"
                description={"Word Sense Disambiguation is one of the most challenging tasks in NLP. Recently, a lot of progress has been made, especially" +
                                " in the area of sense embeddings. My graduate project is about using this technology in the context of semantic similarity tasks"}
                image="https://sitechecker.pro/wp-content/uploads/2020/01/photo_2020-01-30_15-57-02.jpg"
                href="https://github.com/cr1m5onk1ng/text_similarity/tree/master/src/experiments"
            />
            
        </div>
    )
}

export default ArticleList
