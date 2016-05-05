class SongsUsersController < ApplicationController

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

  def update
    @songs_users = User.where(user_id: params[:user_id], song_id: params[:song_id])

    # change the code below to update the date and playlist added to

    if @song_users.update_attributes( selected: params[:selected])
      render 'show', formats: [:json], handlers: [:jbuilder], status: 201
    else
      render json: {error: "Song User Join could not be created."}, status: 422
    end
  end

end
