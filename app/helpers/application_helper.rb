module ApplicationHelper
  def auth_token
    "<input
        type=\"hidden\"
        name=\"authenticity_token\"
        value=\"#{ form_authenticity_token }\">".html_safe
  end

  def time_since_posted(post)
    seconds = (Time.now - post.created_at).to_i; minutes = 0
    hours = 0; days = 0; years = 0

    minutes = seconds/60; seconds = seconds%60; hours = minutes/60
    minutes = minutes%60; days = hours/24; hours = hours%24
    years = days/365; days = years%365

    result = []
    result << "#{years} years" if years > 0
    result << "#{days} days" if days > 0
    result << "#{hours} hours" if hours > 0
    result << "#{minutes} minutes" if minutes > 0
    result << "#{seconds} seconds" if minutes < 5
    "Posted " + result.join(", ") + " ago."
  end
end
