
// import { on } from 'events'
const Scraping = () => {
    const https=require('https')

    const options = {
        hostname: 'www.google.com',
        port: 443,
        path: '/',
        method: 'POST',
        // method: 'POST',
        mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached1,no-cache，浏览器和缓存服务器都不应该缓存页面信息.2,public，浏览器和缓存服务器都可以缓存页面信息.3,no-store，请求和响应的信息都不应该被存储在对方的磁盘系统中.4,must-revalidate，对于客户机的每次请求代理服务器必须想服务器验证缓存是否过. 5,Last-Modified只页面的最后生成时间，GMT格式.
        // headers: { 'Content-Type': 'application/json' },
        // referrerPolicy: 'no-referrer', //
        // body: imageData
        header : {
            // "Content-Type": "image/jpg",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            // "Access-Control-Allow-Headers": "content-type",
        }
      };

    https.request(options, (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];
      
        let error;
        // Any 2xx status code signals a successful response but
        // here we're only checking for 200.
        if (statusCode !== 200) {
          error = new Error('Request Failed.\n' +
                            `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
          error = new Error('Invalid content-type.\n' +
                            `Expected application/json but received ${contentType}`);
        }
        if (error) {
            console.error(error.message);
            // Consume response data to free up memory
            res.resume();
            return;
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
          } catch (e) {
            console.error(e.message);
          }
        });
    }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
    });
    //     if(res){
    //         res.on('data',(chunk)=>{
    //             res.on('data',(chunk)=>{
    //                 console.log('datapass')
    //             })
    //         })
    //         res.on('end',()=>{
    //             console.log('datapassfinisded')
    //         })
    //     }

    // }).on('error',(err)=>{
    //     console.log('error')
    // })

    return (
        <div style={ScrapingStyle}>
            <h2 id="Scraping">Scraping</h2>
        </div>
    )
}
const ScrapingStyle = {
    border: "1px solid steelblue",
    textAlign: 'center',
    minHeight: "300px",
}
export default Scraping
