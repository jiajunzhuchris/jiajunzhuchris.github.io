---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
# About me
Nice to meet you! I am Jiajun ZHU (朱家骏), a senior undergraduate student at Chu Kochen Honors College, **Zhejiang University**, majoring in **Computer Science and Technology**. 

My research focuses on **LLM-based Agents, Human-AI Collaboration, and Visual Analytics**. During the latter half of 2025, I conducted research as a visiting intern at **HKUST VisLab**, advised by Prof. Huamin Qu. I have been working with Prof. Yingcai Wu and Dr. Di Weng at **ZJU IDG Lab** since 2023.

**Looking ahead:** I have received a full Ph.D. scholarship offer from **HKUST** (starting Fall 2026), where I will continue my research under the supervision of Prof. Jun Han and Prof. Huamin Qu. **I am available for a research internship from April to August 2026** and open to long-term collaborations bridging academia and industry.

<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# News
- **[July, 2025]** &nbsp;✈️ I have started my visiting internship at [HKUST VisLab](http://vis.cse.ust.hk/index.html), supervised by [Prof. Huamin Qu](http://www.huamin.org/)!
- **[July, 2025]** &nbsp;🎉 My co-first-authored paper, ViseGPT, has been accepted by UIST 25. See you in Busan, Korea!
- **[May, 2025]** &nbsp;📚 I have completed the defense for my SRTP (Student Research Training Program) project and received a "Good" rating for the final evaluation.
- **[July, 2024]** &nbsp;🎉 Our paper, Ferry, has been accepted by IEEE VIS 24! 


# Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">UIST 2025</div><img src='images/paper/ViseGPT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**ViseGPT: Towards Better Alignment of LLM generated Data Wrangling Scripts and User Prompts.** ***Jiajun Zhu*\***, Xinyu Cheng*, Zhongsu Luo, Yunfan Zhou, Xinhuan Shu, Di Weng, Yingcai Wu

[**📜 Paper**](https://dl.acm.org/doi/10.1145/3746059.3747689)&nbsp;&nbsp;&nbsp;
[**📄 Pdf**](https://arxiv.org/pdf/2508.01279)&nbsp;&nbsp;&nbsp;
[**🎥 Video**](https://www.youtube.com/watch?v=zT1rYn0vf2o)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE VIS 2024 / TVCG</div><img src='images/paper/Ferry.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Ferry: Toward Better Understanding of Input/Output Space for Data Wrangling Scripts.** Zhongsu Luo, Kai Xiong, ***Jiajun Zhu***, Ran Chen, Xinhuan Shu, Di Weng, Yingcai Wu

[**📜 Paper**](https://ieeexplore.ieee.org/abstract/document/10670464)&nbsp;&nbsp;&nbsp;
[**📄 Pdf**](https://dwe.ng/pdf/ferry.pdf)&nbsp;&nbsp;&nbsp;
[**🎥 Video**](https://www.youtube.com/watch?v=ckWQGHQwdb4)
</div>
</div>

- **Object-Oriented Writing: A Structure-Driven Paradigm for Academic Writing.** ***Jiajun Zhu***, Xinyu Cheng, Wenshuo Zhang, Huamin Qu, Yanna Lin, *Under Review*
- **AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction.** Yanjie Zhang, ***Jiajun Zhu***, Minyu Wu, Huamin Qu, and Sicheng Song. *Under Review*
- **RuleScope: Semantic-aware Authoring of Data Validation Rules.** Zhongsu Luo, Jiawen Zhu, Xinhuan Shu, Shuhan Liu, Xiwen Cai, Ran Chen, Kai Xiong, ***Jiajun Zhu***, Di Weng, Yingcai Wu. *Under Review*

# Honors and Awards
- **PGS Scholarship (Postgraduate Studentship), HKUST** (2025)
- **Scholarship of Zhejiang University** (2023, 2024)
- **National Encouragement Scholarship** (2023)
- **Lingjun Growth Scholarship Fund** (2023)
- Bronze Award, Zhejiang University Innovation and Entrepreneurship Competition (2023)
- Second Prize, Zhejiang University Energy Conservation Technology Competition (2023)

# Projects
- **[Project Leader & First Author]** **Object-Oriented Writing: A Structure-Driven Paradigm for Academic Writing** (2025.10 - 2026.04)  
  Designed and developed a UI Agent system integrated into Overleaf as a browser plugin, enabling structure-aware, controllable academic writing with a Qwen3-based AI agent and diff visualization. User study (N=12) showed significant improvement in writing logic quality and reduced cognitive load.

- **[Project Member & Full-stack Developer]** **AI-Assisted English Speaking Practice & Lesson Plan Generation** (2025.07 - 2025.12)  
  Developed and deployed LLM-based scoring agents for the GAVIS platform, using SpeechAce and Docker microservices to evaluate pronunciation, fluency, and task completion. Contributed frontend and vector retrieval components for AdaPT, an adaptive lesson plan system using dynamic prompt chaining.

- **[Project Leader & First Author]** **ViseGPT: Alignment of LLM-generated Data Wrangling Scripts and User Prompts** (2024.11 - 2025.04)  
  Built a constraint-based unit testing framework enabling LLM agents to self-verify and iteratively correct code generation. Implemented full-stack system (React, D3.js, Python) with Llama-3.3 backend; reduced user debugging time by over 40% (UIST 2025).

- **[Project Leader & Core Developer]** **AI-Driven Data Wrangling Understanding and Verification Framework** (2024.05 - 2025.05)  
  Led an SRTP-funded project producing three systems: Ferry (full-stack with Z3 solver and GPT-4 for counterexample generation, reducing script understanding time by 40%), ViseGPT (see above), and RuleScope (early frontend contributions for constraint visualization).

# Services
### Campus Involvement
- *2023.09-2024.06*: Director of Publicity Department, the Secretariat of Chu Kochen Honors College Alumni Association, Zhejiang University
- *2022.09-2023.06*: Deputy Director of Publicity Department, Innovation and Entrepreneurship Training Camp, Zhejiang University
- *2022.09-2023.06*: Publicity Officer of Publicity Department, the Secretariat of Chu Kochen Honors College Alumni Association, Zhejiang University

# Hobbies
I have a wide range of hobbies. I'm really into **traditional Chinese culture** — studying history, dragon & lion dancing, Tai Chi, you name it. In my daily life, I enjoy **writing** and have experience as an editor and proofreader for news articles in student organizations. I’m also **an avid film and TV enthusiast**, analyzing storytelling techniques, cinematography, and cultural themes across genres. **Feel free to chat with me about anything — whether it’s academic collaboration or just casual hobbies!**
- Our team won **first place** in the dragon dance category at Zhejiang University’s Traditional Martial Arts Competition.
- I have written news articles for the Secretariat of Chu Kochen Honors College Alumni Association, which were published on the college's official WeChat account and later included in the magazine of the organization.
