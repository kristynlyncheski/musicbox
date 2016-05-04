class SongsController < ApplicationController
  
  def index
    @songs = Song.all
  end

  def show
    @songs = Song.find(params[:id])
  end

  def create
    @song = Song.where(:song_id => params[:song_id]).first_or_create(
      :song_id => params[:song_id],
      :song_title => params[:song_title],
      :artist_name => params[:artist_name],
      :artist_id => params[:artist_id],
      :album => params[:album],
      :img => params[:img],
      :preview => params[:preview]
    )

    @song.update(
      :song_title => params[:song_title],
      :artist_name => params[:artist_name],
      :artist_id => params[:artist_id],
      :album => params[:album],
      :img => params[:img],
      :preview => params[:preview]
    )

    render 'show', formats: [:json], handlers: [:jbuilder], status: 201

  end

end
