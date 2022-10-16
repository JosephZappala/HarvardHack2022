from random import randrange
from flask import Flask, request

import mysql.connector
import spotipy
from mysql.connector import Error
from spotipy.oauth2 import SpotifyClientCredentials

# ---------------------------------------- Local Server Info ---------------------------------------- #

password = 'Wolfie69medaddy!'
dbName = 'Test'

userID = 1
login_username = 'stevebyrnesmail@gmail.com'
login_password = 'hackharvard2022'

# ---------------------------------------- SpotiPy Initializations ---------------------------------------- #

album_uri = 'spotify:album:2ODvWsOgouMbaA5xf0RkJe'

clientId = '2f882bcc6bac4d089ddb0d28dbb3f502'
clientSecret = 'f6f45b4829f945a4bd6d2e068a43fbfc'
redirectURI = 'http://localhost:8888/callback'
spotify = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials(client_id=clientId, client_secret=clientSecret))
results = spotify.album(album_uri)
limit = 50

# ---------------------------------------- MySQL Connections / Initializations ---------------------------------------- #

def create_connection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("Connection to MySQL DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")
    return connection

connection = create_connection("10.253.20.232", "guest", password, dbName)


def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query executed successfully")
    except Error as e:
        print(f"The error '{e}' occurred")

def execute_read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as e:
        print(f"The error '{e}' occurred")

# ---------------------------------------- MySQL Album Queries ---------------------------------------- #
        
def createAlbumTableQuery(db):
    query = "CREATE TABLE IF NOT EXISTS `" + db + """`.`Albums` (
        `uri` VARCHAR(50) NOT NULL, 
        `title` VARCHAR(100) NOT NULL,
        `artist` VARCHAR(50) NOT NULL,
        `releaseDate` VARCHAR(50) NOT NULL,
        `artwork` VARCHAR(100) NOT NULL,
        `link` VARCHAR(100) NOT NULL,
        `userID` VARCHAR(100) NOT NULL,
        `xCoord` VARCHAR(100) NULL,
        `yCoord` VARCHAR(100) NULL,
        PRIMARY KEY (`uri`, `userID`)
        );
        """
    return query

def createUserTableQuery(db):
    query = "CREATE TABLE IF NOT EXISTS `" + db + """`.`Users` (
        `userID` int NOT NULL AUTO_INCREMENT, 
        `username` VARCHAR(50) NOT NULL,
        `password` VARCHAR(50) NOT NULL,
        PRIMARY KEY (`userID`));
        """
    return query

def addAlbumQuery(uri, title, artist, releaseDate, artwork, link, userID):
    query = "INSERT INTO `Albums` (uri, title, artist, releaseDate, artwork, link, userID) VALUES ('"
    query = query + str(uri) + "', '"
    query = query + title.replace("'", '*') + "', '"
    query = query + artist.replace("'", '*') + "', '"
    query = query + releaseDate + "', '"
    query = query + artwork + "', '"
    query = query + link + "', '"
    query = query + str(userID) + "'); "
    return query

def deleteAlbumQuery(uri, userID):
    return "DELETE FROM `Albums` WHERE uri = '" + str(uri) + "' AND userID = '" + str(userID) + "';"

def moveArtworkQuery(uri, userID, xCoord, yCoord):
    query = "UPDATE `Albums` SET xCoord= '" + str(xCoord) + "', yCoord= '" + str(yCoord) + "' WHERE uri = '" + str(uri) + "' AND userID = '" + str(userID) + "';"
    return query

def rerackAlbumQuery(uri, userID):
    return "UPDATE `Albums` SET xCoord = NULL, yCoord = NULL WHERE uri = '" + str(uri) + "' AND userID = '" + str(userID) + "';"

def getLibraryQuery(userID):
    return "SELECT * FROM `Albums` WHERE userID = '" + str(userID) + "' ORDER BY title, artist;"

def getLibraryByDecadeQuery(userID, decade):
    era = decade[0]
    return "SELECT * FROM `Albums` WHERE userID = '" + str(userID) + "' AND releaseDate LIKE '__" + str(era) + "%';"

def getAlbumQuery(uri, userID):
    return "SELECT * FROM `Albums` WHERE uri = '" + str(uri) + "' AND userID = '" + str(userID) + "';"

def getAlbumByTitleQuery(search_str, userID):
    query = "SELECT * FROM `Albums` WHERE title LIKE '%" + search_str + "%' AND userID = '"
    query = query + str(userID) + "' ORDER BY title, artist;"
    return query

def getAlbumByArtistQuery(search_str, userID):
    query = "SELECT * FROM `Albums` WHERE artist LIKE '%" + search_str + "%' AND userID = '"
    query = query + str(userID) + "' ORDER BY title, artist;"
    return query

# ---------------------------------------- MySQL User Queries ---------------------------------------- #

def addUserQuery(username, password):
    query = "INSERT INTO `Users` (username, password) VALUES ('"
    query = query + username + "', '"
    query = query + password + "');" 
    return query

# ---------------------------------------- MySQL Functions ---------------------------------------- #

def getAlbumInfoLibrary(uri, userID):
    album = []
    result = execute_read_query(connection, getAlbumQuery(uri, userID))
    album.append(result)
    if len(album) != 1:
        print("Error: retrieved not a single album")
    return album

def addToLibrary(uri, title, artist, releaseDate, artwork, link, userID):
    execute_query(connection, addAlbumQuery(uri, title, artist, releaseDate, artwork, link, userID))
    return

def removeFromLibrary(uri, userID):
    execute_query(connection, deleteAlbumQuery(uri, userID))
    return

# ---------------------------------------- SpotiPy Data-Retrieving Functions ---------------------------------------- #

def getAlbumInfoSpotify(uri):
    results = spotify.album(uri)
    return {
        'title': results['name'],
        'artist': results['artists'][0]['name'],
        'releaseDate': results['release_date'],
        'artwork': results['images'][0]['url'],
        'link': results['external_urls']['spotify']
    }

def getAlbumsFromSearch(search_str, lim):
    if search_str == '':
        return 'Error: Empty Search'
    results = spotify.search(q=search_str, limit=lim, type='album')
    if len(results) == 0:
        return 'Error: No Results'
    options = []
    for album in results['albums']['items']:
        record = {
            'uri': album['uri'],
            'title': album['name'], 
            'artist': album['artists'][0]['name'],
            'releaseDate': album['release_date'],
            'artwork': album['images'][0]['url'],
            'link': album['external_urls']['spotify']
            }
        options.append(record)
    return options

def previewAlbum(uri):
    results = spotify.album(uri)
    songsCount = results['total_tracks']
    randomSongInd = randrange(0, songsCount)
    song = results['tracks']['items'][randomSongInd]['uri']
    songDuration = results['tracks']['items'][randomSongInd]['duration_ms']
    halfway = songDuration / 2
    spotify.seek_track(halfway)
    spotify.start_playback(uri)
    return

# ---------------------------------------- Full-Functions ---------------------------------------- #

def librarySearch(search_str, userID, releaseDate):
    albums = []
    try:
        albums = execute_read_query(connection, getAlbumByTitleQuery(search_str, userID, releaseDate))
        for album in albums:
            print(album)
    except TypeError:
        print('Error: No Results Found in Library by Title')
    try:
        albums = execute_read_query(connection, getAlbumByArtistQuery(search_str, userID, releaseDate))
        for album in albums:
            print(album)
    except TypeError:
        print('Error: No Results Found in Library by Artist')
    return albums

def addSongsWithSearch(search_str, limit):
    albums = getAlbumsFromSearch(search_str, limit)
    for album in albums:
        execute_query(connection, addAlbumQuery(
                album['uri'], 
                album['title'],
                album['artist'],
                album['releaseDate'],
                album['artwork'],
                album['link'],
                1
                ))
       
# ---------------------------------------- Misc. Functions ---------------------------------------- #
        
def findDecade(date):
    decade = date[3]
    if decade == '7':
        return 197
    elif decade == '8':
        return 198
    elif decade == '9':
        return 199
    elif decade == '0':
        return 200
    elif decade == '1':
        return 201
    elif decade == '2':
        return 202
    else:
        return -1

# ---------------------------------------- Flask STUFFFF ---------------------------------------- #


app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"


@app.route('/api/friends', methods=['GET'])
def friends():

    return {"message" :["Stephen", "Keerthi", "Eshan"]}

@app.route('/api/library', methods=['GET'])
def library():
    name = request.headers['Name']
    print(name)

    return {"message" :["Stephen", "Keerthi", "Eshan"]}


@app.route('/api/saveroom', methods=['POST'])
def saveRoom():
    data = request.json
    print(data)
    return {"message":"success"}

if __name__ == "__main__":
    app.run(debug=True, port=8080)

# I know this is terrible spot I dont know how python works
#
# execute_query(connection, "DROP TABLE IF EXISTS `Albums`;")
# execute_query(connection, "DROP TABLE IF EXISTS `Users`;")
# execute_query(connection, createAlbumTableQuery(dbName))
# execute_query(connection, createUserTableQuery(dbName))
# execute_query(connection, addUserQuery(login_username, login_password))
# addSongsWithSearch('party', limit)
# albumTest = getAlbumInfoSpotify(album_uri)
# execute_query(connection, addAlbumQuery(album_uri, 
#                                         albumTest['title'],
#                                         albumTest['artist'],
#                                         albumTest['releaseDate'],
#                                         albumTest['artwork'],
#                                         albumTest['link'],
#                                         1))
# execute_query(connection, removeFromLibrary(album_uri, 1))
# execute_query(connection, addAlbumQuery(album_uri, 
#                                         albumTest['title'],
#                                         albumTest['artist'],
#                                         albumTest['releaseDate'],
#                                         albumTest['artwork'],
#                                         albumTest['link'],
#                                         1))
# execute_query(connection, moveArtworkQuery(album_uri, 1, '10', '-30'))
# execute_query(connection, rerackAlbumQuery(album_uri, 1))
# results = execute_read_query(connection, getAlbumByArtistQuery('', 1))
# for album in results:
#     print(album[1] + ": " + album[2])
#     print()


