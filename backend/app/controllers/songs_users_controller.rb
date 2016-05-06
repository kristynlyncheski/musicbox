class SongsUsersController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
    @songs_users = SongsUsers.all
  end

  def show
    @songs_users = SongsUsers.find(params[:id])
  end

  def new
    @songs_users = SongsUsers.new
  end

  def create
    @songs_users = SongsUsers.where(:user_id => params[:user_id],:song_id => params[:song_id]).first_or_create(
      :user_id => params[:user_id],
      :song_id => params[:song_id],
      :selected => params[:selected],
    )

    @songs_users.update(
      :selected => params[:selected],
    )

    render 'show', formats: [:json], handlers: [:jbuilder], status: 201


  end

  def addedPlaylist
    @songs_users = SongsUsers.where(user_id: params[:user_id], song_id: params[:song_id]).first

    @songs_users.update(
      :playlist_added_to => params[:playlist_added_to],
      :date_added_to_playlist => Time.new
    )
    render 'show', formats: [:json], handlers: [:jbuilder], status: 201


  end

end
