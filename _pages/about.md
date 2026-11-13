---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<h1 id="about-me">About Me</h1>

Nice to meet you! I am a first-year Ph.D. student in the Individualized Interdisciplinary Program (IIP), [Academy of Interdisciplinary Studies](https://ais.hkust.edu.hk/), at [The Hong Kong University of Science and Technology (HKUST)](https://hkust.edu.hk/), advised by [Prof. Jun Han](https://stevenhan1991.github.io/) and [Prof. Huamin Qu](http://huamin.org/). My research interests span **Agentic AI, Scientific Visualization, and Human-AI Interaction**. I am interested in controllable AI systems that understand user intent and support interactive exploration and creation. During my Ph.D., I also plan to develop methods for interacting with, predicting, generating, compressing, and rendering complex scientific data to enable efficient scientific analysis and discovery.

Before joining HKUST, I received my bachelor's degree in Computer Science and Technology from Chu Kochen Honors College, [Zhejiang University](https://www.zju.edu.cn/english/), where I worked with [Prof. Yingcai Wu](https://person.zju.edu.cn/en/0014057/847623.html) and [Dr. Di Weng](https://dwe.ng/) at [ZJU IDG Lab](https://zjuidg.org/). I was a visiting research intern at [HKUST VisLab](https://vis.cse.ust.hk/) from July to December 2025, advised by [Prof. Huamin Qu](http://huamin.org/). From June to August 2026, I was a research intern at [Alibaba Cloud](https://www.alibabacloud.com/), mentored by [Dr. Bin Wu](https://binwu.net/).

I am actively seeking **research collaborations, research internship opportunities, and visiting or exchange opportunities**. Please feel free to reach out if our research interests overlap.

<h1 id="news">News</h1>

- **[September, 2026]** &nbsp;🎓 I started my Ph.D. journey at [HKUST](https://hkust.edu.hk/), advised by [Prof. Jun Han](https://stevenhan1991.github.io/) and [Prof. Huamin Qu](http://huamin.org/)!
- **[June, 2026]** &nbsp;🏅 I received the **Outstanding Undergraduate Thesis** award at [Zhejiang University](https://www.zju.edu.cn/english/)!
- **[June, 2026]** &nbsp;☁️ I joined [Alibaba Cloud](https://www.alibabacloud.com/) as a Research Intern, working on agentic databases.
- **[May, 2026]** &nbsp;🎉 Our paper, [RuleScope](https://ieeexplore.ieee.org/abstract/document/11535324), has been accepted by **IEEE TVCG**!
- **[July, 2025]** &nbsp;✈️ I have started my visiting internship at [HKUST VisLab](http://vis.cse.ust.hk/index.html), supervised by [Prof. Huamin Qu](http://huamin.org/)!
- **[July, 2025]** &nbsp;🎉 My co-first-authored paper, ViseGPT, has been accepted by UIST 25. See you in Busan, Korea!
- **[May, 2025]** &nbsp;📚 I have completed the defense for my SRTP (Student Research Training Program) project and received a "Good" rating for the final evaluation.
- **[July, 2024]** &nbsp;🎉 Our paper, Ferry, has been accepted by IEEE VIS 24!

<h1 id="education">Education</h1>

{% include experience-list.html entries=site.data.experience.education %}

<h1 id="experience">Experience</h1>

{% include experience-list.html entries=site.data.experience.research %}

<h1 id="publications">Publications</h1>

<span id="preprints" class="legacy-anchor" aria-hidden="true"></span>
{% assign all_papers = site.data.publications.manuscripts | concat: site.data.publications.published %}
{% for paper_id in site.data.publications.order %}
{% assign paper = all_papers | where: "id", paper_id | first %}
{% include publication-card.html %}
{% endfor %}

<h1 id="projects">Projects</h1>

<article class="paper-box project-card" id="speaking-project">
  <div class="paper-box-image">
    <a class="media-frame" href="https://cle.hkust.edu.hk/scholarship/knowledge-transfer" aria-label="GAVIS official project introduction"><img src="images/projects/gavis.webp" alt="Official GAVIS project artwork" loading="lazy" decoding="async" width="1373" height="877"></a>
    <p class="media-credit">Project artwork: HKUST Center for Language Education.</p>
  </div>
  <div class="paper-box-text">
    <div class="work-meta"><span class="work-venue">HKUST VisLab · QEF-funded project</span><span class="project-date">2025.07–2025.12</span></div>
    <h3 class="work-title">AI-Assisted English Speaking Practice</h3>
    <p class="work-note">Research collaboration · Full-stack developer</p>
    <p class="project-summary"><strong>Project.</strong> A QEF-funded program supporting English speaking practice for secondary students through AI-assisted assessment, personalized feedback, and immersive learning across web, mobile, and VR environments.</p>
    <p class="project-summary"><strong>My Contribution.</strong> Built the speech-assessment pipeline by combining SpeechAce pronunciation and fluency assessment with LLM-based evaluation of task fulfillment. Implemented and containerized evaluation services with Docker, and contributed to system integration and deployment of the platform’s web and mobile applications.</p>
    <div class="work-links"><a href="https://cle.hkust.edu.hk/scholarship/knowledge-transfer">Official Project</a><a href="https://ais.hkust.edu.hk/whats-happening/news/hkust-secures-30-million-grant-develop-ai-powered-english-learning-system">HKUST News</a></div>
  </div>
</article>

<article class="paper-box project-card" id="data-wrangling-project">
  <div class="paper-box-image">
    <a class="media-frame image-popup" href="images/paper/ferry.webp" aria-label="View the data wrangling research interface"><img src="images/paper/ferry.webp" alt="Interactive data wrangling interface from the project’s research prototypes" loading="lazy" decoding="async" width="1546" height="786"></a>
    <p class="media-credit">Research prototype from the project: Ferry.</p>
  </div>
  <div class="paper-box-text">
    <div class="work-meta"><span class="work-venue">Zhejiang University · SRTP-funded project</span><span class="project-date">2024.05–2025.05</span></div>
    <h3 class="work-title">AI-Driven Data Wrangling Understanding and Validation Framework</h3>
    <p class="work-note">Project leader · Core developer</p>
    <p class="project-summary"><strong>Project.</strong> A university-funded research program helping users understand and validate data transformation scripts through semantic constraints, program analysis, and interactive visualization. The work connected related studies into a shared research and development effort.</p>
    <p class="project-summary"><strong>My Contribution.</strong> Coordinated research design, system development, and experimental evaluation. Built a full-stack prototype integrating static input/output constraint inference with Z3- and GPT-4-assisted example generation, co-led prompt-derived constraint testing and visual debugging as a co-first author, and contributed to early interface development, user studies, and manuscript preparation. Completed the SRTP project with a “Good” final evaluation.</p>
    <div class="work-links"><a href="#ferry" target="_self">Ferry</a><a href="#visegpt" target="_self">ViseGPT</a><a href="#rulescope" target="_self">RuleScope</a></div>
  </div>
</article>

<h1 id="honors-and-awards">Honors and Awards</h1>

- **Outstanding Undergraduate Thesis, Zhejiang University** (2026)
- **PGS Scholarship (Postgraduate Studentship), HKUST** (2025)
- **Scholarship of Zhejiang University** (2023, 2024)
- **National Encouragement Scholarship** (2023)
- **Lingjun Growth Scholarship Fund** (2023)
- Bronze Award, Zhejiang University Innovation and Entrepreneurship Competition (2023)
- Second Prize, Zhejiang University Energy Conservation Technology Competition (2023)

<h1 id="services">Services</h1>

### Academic Service
- Reviewer, IEEE International Conference on Data Engineering (**ICDE 2027**)

### Campus Involvement
- *2023.09-2024.06*: Director of Publicity Department, the Secretariat of Chu Kochen Honors College Alumni Association, Zhejiang University
- *2022.09-2023.06*: Deputy Director of Publicity Department, Innovation and Entrepreneurship Training Camp, Zhejiang University
- *2022.09-2023.06*: Publicity Officer of Publicity Department, the Secretariat of Chu Kochen Honors College Alumni Association, Zhejiang University

<span id="experience-and-collaborations" class="legacy-anchor" aria-hidden="true"></span>
<h1 id="collaborations">Collaborations</h1>

<div class="experience-logos">
  <a href="https://www.zju.edu.cn/english/" aria-label="Zhejiang University"><img src="images/experience/zhejiang-university.svg" alt="Zhejiang University logo" loading="lazy"></a>
  <a href="https://hkust.edu.hk/" aria-label="HKUST"><img src="images/experience/hkust.webp" alt="HKUST logo" loading="lazy"></a>
  <a href="https://www.alibabacloud.com/" aria-label="Alibaba Cloud"><img src="images/experience/alibaba-cloud.png" alt="Alibaba Cloud logo" loading="lazy"></a>
  <a href="https://www.ncl.ac.uk/" aria-label="Newcastle University"><img src="images/experience/newcastle-university.png" alt="Newcastle University logo" loading="lazy"></a>
</div>
