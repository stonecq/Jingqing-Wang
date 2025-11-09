<!DOCTYPE html>
<html lang="en">

<body>

<div class="publication-list">

  <!-- Publication 1 -->
  <div class="publication">
    <h3>SARC: Sentiment-Augmented Deep Role Clustering for Fake News Detection</h3>
    <p class="authors">[2025.10] <strong>Jingqing Wang*</strong>, Jiaxing Shang, Rong Xu, Fei Hao, Tianjin Huang, Geyong Min.</p>
    <p class="venue">The 19th ACM International Conference on Web Search and Data Mining (WSDM), 2026.</p>
    <p class="acceptance">(Acceptance Rate: 16.3%)</p>
    <p class="abstract">
      Fake news detection has been a long-standing research focus in social networks. Recent studies suggest that incorporating sentiment information from both news content and user comments can enhance detection performance. However, existing approaches typically treat sentiment features as auxiliary signals, overlooking role differentiation, that is, the same sentiment polarity may originate from users with distinct roles, thereby limiting their ability to capture nuanced patterns for effective detection. To address this issue, we propose SARC, a Sentiment-Augmented Role Clustering framework which utilizes sentiment-enhanced deep clustering to identify user roles for improved fake news detection. The framework first generates user features through joint comment text representation (with BiGRU and Attention mechanism) and sentiment encoding. It then constructs a differentiable deep clustering module to automatically categorize user roles. Finally, unlike existing approaches which take fake news label as the unique supervision signal, we propose a joint optimization objective integrating role clustering and fake news detection to further improve the model performance. Experimental results on two benchmark datasets, RumourEval-19 and Weibo-comp, demonstrate that SARC achieves superior performance across all metrics compared to baseline models.
    </p>
    <p class="code">
      Code: <a href="https://github.com/jxshang/SARC" target="_blank" rel="noopener">https://github.com/jxshang/SARC</a>
    </p>
  </div>

  <!-- Publication 2 (Example) -->
  <!-- <div class="publication">
    <h3>Another Great Paper on Social Media Analysis</h3>
    <p class="authors">[2024.05] Alice Smith, Bob Lee, Jingqing Wang.</p>
    <p class="venue">Proceedings of the ACM Web Conference (WWW), 2025.</p>
    <p class="acceptance">(Acceptance Rate: 18.1%)</p>
    <p class="abstract">
      This paper explores novel methods for analyzing user behavior in online social platforms...
    </p>
    <p class="code">
      Code: <a href="https://github.com/example/repo" target="_blank" rel="noopener">https://github.com/example/repo</a>
    </p>
  </div> -->

  <!-- Add more publications here -->

</div>

</body>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Publications</title>
  <style>
    .publication-list {
      font-family: "Times New Roman", Times, serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .publication {
      margin-bottom: 2.2em;
      padding-bottom: 1.4em;
      border-bottom: 1px solid #eee;
    }

    .publication h3 {
      margin-top: 0;
      margin-bottom: 0.6em;
      font-size: 1.4em;
      font-weight: bold;
      color: #222;
    }

    .publication p {
      margin: 0.2em 0;
      color: #555;
    }

    .publication .authors,
    .publication .venue {
      font-style: italic;
    }

    .publication .acceptance {
      color: #777;
    }
    
    .publication .abstract {
      margin: 0.8em 0 0.5em;
      text-align: justify;
      line-height: 1.5;
      color: #333;
    }

    .publication .code {
      margin: 0.5em 0 0;
      color: #2a6ae9;
    }

    .publication a {
      color: inherit;
      text-decoration: underline;
    }
    .publication .authors strong {
      font-weight: bold !important;
      font-style: em; 
    }
  </style>
</head>
</html>