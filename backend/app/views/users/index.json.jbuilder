json.users @users do |user|

  json.user_id user.user_id
  json.display_name user.display_name
  json.email user.email
  json.img user.img

end
