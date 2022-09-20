import uvicorn as uvicorn
from flask import Flask, render_template as rt, request, make_response

app = Flask(__name__)

def render_template(page: str):
    lang = request.cookies.get("lang")
    print([x for x in request.headers.keys()])

    supported_languages = ["en", "ru"]
    if lang is None or lang not in supported_languages:
        lang = request.accept_languages.best_match(supported_languages)

    if lang == "ru":
        response = make_response(rt(f"{page}-ru.html"))
        # response.headers["Lang"] = "ru"
        response.set_cookie("lang", "ru", samesite="Strict")
        return response
    else:
        response = make_response(rt(f"{page}-en.html"))
        response.set_cookie("lang", "en", samesite="Strict")
        return response
    #
    # print(lang)
    # print([x for x in response.headers.keys()])



if __name__ == '__main__':
    uvicorn.run(app, port=9990)





@app.route('/pricing')
def pricing():  # put application's code here
    return render_template("pricing")


@app.route('/')
def hello_world():  # put application's code here
    lang = request.args.get("l")
    # print(lang)
    if lang is None:
        return render_template("index")
    elif lang == "ru":
        response = make_response(rt(f"index-ru.html"))
        # response.headers["lang"] = "ru"
        response.set_cookie("lang", "ru", samesite="Strict")
    else:
        response = make_response(rt(f"index-en.html"))
        # response.headers["lang"] = "en"
        response.set_cookie("lang", "en", samesite="Strict")
    return response
    # print(lang)




if __name__ == '__main__':
    app.run()
