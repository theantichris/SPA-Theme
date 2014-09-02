Vagrant.configure("2") do |config|
    config.vm.box = "puppet"
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "private_network", ip: "192.168.56.110"
    config.vm.hostname = "spatheme.dev"

    config.vm.provision :puppet do |puppet|
        puppet.manifests_path = 'puppet/manifests'
        puppet.module_path = 'puppet/modules'
        puppet.manifest_file = 'init.pp'
    end
end
