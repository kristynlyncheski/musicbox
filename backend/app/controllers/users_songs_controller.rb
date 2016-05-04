class UsersSongsController < ApplicationController

  def index
    @usersSongs = UserSong.all
  end

  def show
    @usersSongs = UserSong.find(params[:id])
  end

  def new
    @userSong = UserSong.new
  end

  def create
    @userSong = UserSong.where(:user_id => params[:user_id],:song_id => params[:song_id]).first_or_create(
      :user_id => params[:user_id],
      :display_name => params[:display_name],
      :email => params[:email],
      :img => params[:img]
    )

    @user.update(
      :display_name => params[:display_name],
      :email => params[:email],
      :img => params[:img]
    )
    # http://stackoverflow.com/questions/14599113/activerecord-update-a-record-if-exists-else-create/25497490#25497490
    # this updates the existing (as well as new) entry, in case the name, email, etc has changed


    # @user = User.new( user_id: params[:user_id], display_name: params[:display_name], email: params[:email], img: params[:img])

    # if @user.save
    render 'show', formats: [:json], handlers: [:jbuilder], status: 201
    # else
    #   render json: {error: "User could not be created."}, status: 422
    # end
  end
end
