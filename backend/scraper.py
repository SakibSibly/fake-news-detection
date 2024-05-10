import requests
import os


API_KEY=os.getenv('API_KEY')
SEARCH_ENGINE_ID=os.getenv('SEARCH_ENGINE_ID')
FILE_PATH='result.txt'
URL=os.getenv('URL')


def getNews(params: dict) -> None:
    cnt = 0
    for page in range(1, 11):
        res = requests.get(URL, params=params)
        if res.status_code == 200:
            res = res.json()
            items = res['items']

            for item in items:
                cnt+=1
                site_name = '[' + item['pagemap']['metatags'][0]['og:site_name'] + ']'
                title = 'Title : ' + item['title']
                snippet = 'Snippet : ' + item['snippet']
                link = 'link : ' + item['link']
                res = f"-->>{cnt}\n" + site_name + '\n' + title + '\n' + snippet + '\n' + link + '\n\n\n'
                file = open(FILE_PATH, 'a', encoding='utf-8')
                file.write(res)
                file.close()

            params['start'] = params['start']+1
            print("Page", page, "Checked!")
        else:
            print("Sorry...Technical Problem!")
            break


def main():
    query = open('input.txt', 'r', encoding='utf-8').read()

    params = {
        'key' : API_KEY,
        'cx' : SEARCH_ENGINE_ID,
        'q' : query,
        'num' : 10,
        'start' : 1
    }

    getNews(params)


if __name__ == '__main__':
    main()
