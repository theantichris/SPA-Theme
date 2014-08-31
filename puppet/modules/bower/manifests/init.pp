class bower {
  exec {
    'install-bower':
    command => 'sudo npm install -g bower',
    unless => 'ls /usr/bin/bower',
    require => Package['nodejs'],
  }

  exec {
    'install-bower-packages':
    command => 'bower install --allow-root',
    cwd => '/vagrant',
    require => Exec['install-bower'],
  }
}