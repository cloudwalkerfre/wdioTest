### WebdriverIO 测试 Demo

  Why jasmine? Because I considering using jest for `REACT` later;

----

You need to have a `selenium-standalone` at ready, if you never used one, just:

```bash
npm i -g selenium-standalone  
selenium-standalone install   
selenium-standalone start
```

Also, if you want to see a nice Allure-report, you need to install `allure-commandline` =>

```bash
brew tap qatools/formulas  
brew install allure-commandline
```

Since we already set **outputDir: 'allure-results'** in **wdio.conf.js**, so just run:

```bash
allure generate allure-results
```

Then, it's up to you how you want to see the generated report, you can:

    allure report open

Or, if you are using jenkins, install `jenkins allure plugin`, set the path in global-tool-configuration, in my case, it's:

>name: allure  
>path: /usr/local/Cellar/allure-commandline/1.4.23/

After each test, allure will generate a HTML report, and a label icon beside each build, just click on it.

And if you are using jenkins, maybe do a `rm -rf allure-results` before each test, otherwise it's a pain to separate each test run, allure won't do it for you.
