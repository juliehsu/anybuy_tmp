require 'bundler/capistrano'

set :application, "anybuy1.0"
set :repository,  "git@github.com:aizr/anybuy1.0.git"

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "54.249.253.83"                          # Your HTTP server, Apache/etc
role :app, "54.249.253.83"                          # This may be the same as your `Web` server
role :db,  "54.249.253.83", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

# If you are using Passenger mod_rails uncomment this:

 namespace :deploy do
   task :copy_config_files, :roles => [:app] do
   db_config = "#{shared_path}/database.yml"
   run "cp #{db_config} #{release_path}/config/database.yml"
  end

   task :update_symlink do
   run "ln -s #{shared_path}/public/system #{current_path}/public/system"
  end
   
   task :start do ; end
   task :stop do ; end
   task :restart, :roles => :app, :except => { :no_release => true } do
     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
   end
 end

 after "deploy:update_code", "deploy:copy_config_files"
 after "deploy:finalize_update", "deploy:update_symlink"
