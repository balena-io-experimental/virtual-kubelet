// +build !no_web_provider

package register

import (
	"github.com/virtual-kubelet/virtual-kubelet/providers"
	web "github.com/virtual-kubelet/virtual-kubelet/providers/balena"
)

func init() {
	register("balena", initWeb)
}

func initWeb(cfg InitConfig) (providers.Provider, error) {
	return web.NewBrokerProvider(cfg.NodeName, cfg.OperatingSystem, cfg.DaemonPort)
}
