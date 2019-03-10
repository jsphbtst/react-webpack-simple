import os
from flask import Flask, send_from_directory
from flask_cors import CORS 

app = Flask(__name__, static_folder='dist')
CORS(app)


# how to implement sockets?


# TODO: make it work for dev env
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
	folder_path = '{}'
	folder_path = folder_path.format('dist')
	print('The folder path is: {}'.format(folder_path))

	if (path != "") and (os.path.exists(folder_path + '/' + path)):
		return send_from_directory(folder_path, path)
	else:
		return send_from_directory(folder_path, 'index.html')

if __name__ == '__main__':
	app.run(port=9090, debug=True, use_reloader=True)