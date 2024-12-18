package com.security.jwt.service.jwt;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class JwtService {

    private final JwtEncoder encoder;

    public JwtService(JwtEncoder encoder) {
        this.encoder = encoder;
    }

    public String generateToken(Authentication authentication) {
        Instant now = Instant.now();
        long expiry = 36000L;

        var principal = authentication.getPrincipal();
        boolean isActive = false;

        if (principal instanceof UserAuthenticated user) {
            isActive = user.isEnabled();
        }

        var roles = authentication
                .getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        var claims = JwtClaimsSet.builder()
                .issuer("jwt")
                .issuedAt(now)
                .expiresAt(now.plusSeconds(expiry))
                .claim("username", authentication.getName())
                .claim("roles", roles)
                .claim("active", isActive)
                .build();

        return encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }
}
